from flask import Flask
from app.routes import main
from app.extensions import db, bcrypt, jwt
from flask_cors import CORS
from dotenv import load_dotenv
import os

def create_app():
    app = Flask(__name__)
    @app.errorhandler(500)
    def internal_server_error(error):
        return {
            "message": "Internal server error"
        }, 500
    load_dotenv()
    CORS(app)
    
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        f"mysql+pymysql://{os.getenv('DB_USER')}:"
        f"{os.getenv('DB_PASSWORD')}@"
        f"{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/"
        f"{os.getenv('DB_NAME')}"
    )
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    
    from app.models import User

    with app.app_context():
        db.create_all()

    app.register_blueprint(main)

    return app