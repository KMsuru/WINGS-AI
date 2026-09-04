from flask import Flask
from app.routes import main
from app.extensions import db, bcrypt, jwt
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.config["JWT_SECRET_KEY"] = "wings-ai-secret-key"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///wings_ai.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    
    from app.models import User

    with app.app_context():
        db.create_all()

    app.register_blueprint(main)

    return app