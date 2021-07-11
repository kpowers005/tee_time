from flask_wtf.recaptcha import validators
from sqlalchemy.orm import backref
from .db import db
from .user import User

class TeeTime(db.Model):
  __tablename__ = 'tee_times'

  id = db.Column(db.Integer, primary_key=True)
  date = db.Column(db.String(40), nullable=False)
  time = db.Column(db.String(40))
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  course_api = db.Column(db.String(1000), nullable=False)

  other_players = db.relationship('User', secondary='booked_users', back_populates='other_players')
  user = db.relationship('User', back_populates='tee_time')


  def to_dict(self):
    return {
      'id': self.id,
      'date': self.date,
      'time': self.time,
      'other_players': self.other_players,
      'userId': self.userId,
      'course_api': self.course_api,
    }


  def get_user(self):
    find_user = User.query.get(self.userId)
    return find_user

booked_users = db.Table('booked_users',
  db.Column('playerId', db.Integer, db.ForeignKey('users.id')),
  db.Column('teeTimeId', db.Integer, db.ForeignKey('tee_times.id')),
  )
