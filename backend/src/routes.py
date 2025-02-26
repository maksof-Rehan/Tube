from flask import Blueprint, request, jsonify
from src.database import db
from src.models import User
from werkzeug.security import generate_password_hash

api = Blueprint("api", __name__)

@api.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("customerName")
    email = data.get("customerEmail")
    password = data.get("customerPassword")

    if not name or not email or not password:
        return jsonify({"error": "All fields are required"}), 400

    if User.query.filter_by(customerEmail=email).first():
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = generate_password_hash(password)

    new_user = User(customerName=name, customerEmail=email, customerPassword=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registration successful!"}), 201
