from flask import Flask
from flask_cors import CORS
from src.database import db
from src.routes import api

app = Flask(__name__)

# Database configuration (Using SQLite)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize extensions
db.init_app(app)
CORS(app)

# Register routes
app.register_blueprint(api, url_prefix="/api")

# Create tables
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True, port=8000)
