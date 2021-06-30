from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    overall_rating = db.Column(db.Integer)
    play_level = db.Column(db.String(20), nullable=False)
    profile_pic = db.Column(db.String(500))
    hashed_password = db.Column(db.String(255), nullable=False)

    tee_times = db.relationship('TeeTime', secondary='booked_users')
    reviews = db.relationship('Review', back_populates='user')
    t_time = db.relationship('TeeTime', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
