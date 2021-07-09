from sqlalchemy.orm import backref
from .db import db

class TeeTime(db.Model):
  __tablename__ = 'tee_times'

  id = db.Column(db.Integer, primary_key=True)
  date = db.Column(db.Date)
  time = db.Column(db.Time)
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
      'user': self.user,
      'course_api': self.course_api,
    }


booked_users = db.Table('booked_users',
  db.Column('playerId', db.Integer, db.ForeignKey('users.id')),
  db.Column('teeTimeId', db.Integer, db.ForeignKey('tee_times.id')),
  )
