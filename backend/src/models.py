from src.database import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customerName = db.Column(db.String(100), nullable=False)
    customerEmail = db.Column(db.String(100), unique=True, nullable=False)
    customerPassword = db.Column(db.String(255), nullable=False)
