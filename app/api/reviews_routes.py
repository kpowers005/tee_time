from flask import Blueprint, jsonify, session, request
from ..models import db, Review
from ..forms.review_form import ReviewForm

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/', methods=["POST"])
def submit_review():

  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  review = Review()

  if form.validate_on_submit():
    form.populate_obj(review)

  db.session.add(review)
  db.session.commit()

  return 'Success'
