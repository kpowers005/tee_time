from flask import Blueprint, jsonify, session, request
from ..models import db, Review
from ..forms.review_form import ReviewForm

reviews_routes = Blueprint('reviews', __name__)

@reviews_routes.route('/', methods=["POST"])
@reviews_routes.route('/<id>')
def review_handler(id=None):

  if id is None:
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    review = Review()

    if form.validate_on_submit():
      form.populate_obj(review)

      db.session.add(review)
      db.session.commit()
      review.to_dict()
      id = review.course_api

  results = Review.query.filter(Review.course_api == id).all()

  reviews = [result.to_dict() for result in results]

  return {'reviews':reviews}



@reviews_routes.route('delete/<id>/', methods=["DELETE"])
@reviews_routes.route('edit/<id>/', methods=["PUT", "DELETE"])
def edit_review(id):
  review = Review.query.get(id)
  if request.method == 'DELETE':
    db.session.delete(review)
    db.session.commit()
    return { 'id': review.course_api }

  review.to_dict()
  newReview = request.get_json()

  if (review.rating != newReview['rating']) or (review.review != newReview['review']):
    review.rating = newReview['rating']
    review.review = newReview['review']
    db.session.commit()

  return { 'id': review.course_api }
