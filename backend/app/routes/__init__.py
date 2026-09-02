from flask import Blueprint

main = Blueprint("main", __name__)

@main.route("/api/health", methods=["GET"])
def health_check():
    return {
        "status": "success",
        "message": "WINGS AI backend is running"
    }