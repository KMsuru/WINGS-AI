from flask import Blueprint, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app.extensions import db
from app.models import User


main = Blueprint("main", __name__)


@main.route("/api/health", methods=["GET"])
def health_check():
    return {
        "status": "success",
        "message": "WINGS AI backend is running"
    }


@main.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    if not data or not data.get("name"
                                ) or not data.get("email") or not data.get("password"):
        return {
            "message": "Name, email and password are required"
        }, 400
    existing_user = User.query.filter_by(email=data["email"]).first()

    if existing_user:
        return {
            "message": "Email already registered"
        }, 400
        
    user = User(
        name=data["name"],
        email=data["email"]
    )
    
    user.set_password(data["password"])
    
    db.session.add(user)
    db.session.commit()
    return {
        "message": "User registered successfully"
    }, 201

@main.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()

    if not data or not data.get("email") or not data.get("password"):
        return {
            "message": "Email and password are required"
        }, 400

    user = User.query.filter_by(email=data["email"]).first()

    if not user:
        return {
            "message": "Invalid email or password"
        }, 401

    if not user.check_password(data["password"]):
        return {
            "message": "Invalid email or password"
        }, 401

    access_token = create_access_token(identity=str(user.id))

    return {
        "message": "Login successful",
        "access_token": access_token
    }, 200
    
    
    
@main.route("/api/profile", methods=["GET"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))

    if not user:
        return {
            "message": "User not found"
        }, 404

    return {
        "id": user.id,
        "name": user.name,
        "email": user.email
    }, 200