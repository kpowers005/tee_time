from flask import Blueprint, jsonify, session, request
from ..models import db, TeeTime
from ..forms.reservation_form import ReservationForm


reservations_routes = Blueprint('reservations', __name__)

@reservations_routes.route('/', methods=["POST"])
@reservations_routes.route('/<id>')
def review_handler(id=None):

  if id is None:
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    reservation = TeeTime()

    if form.validate_on_submit():
      form.populate_obj(reservation)
      print('NEW RESERVARION')
      db.session.add(reservation)
      db.session.commit()
      reservation.to_dict()
      id = reservation.course_api

  results = TeeTime.query.filter(TeeTime.course_api == id).all()
  reservations = []

  for result in results:
    newResult = result.to_dict()
    newResult['user'] = result.get_user().to_dict()
    reservations.append(newResult)

  return {'reservations':reservations}
