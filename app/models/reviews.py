from .db import db


class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  review = db.Column(db.Text, nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  course_api = db.Column(db.String(1000), nullable=False)
  rating = db.Column(db.Integer)

  user = db.relationship('User', back_populates='reviews')

  def to_dict(self):
    return {
      'id': self.id,
      'review': self.review,
      'course_api': self.course_api,
      'rating': self.rating,
      'user': self.user,
    }
