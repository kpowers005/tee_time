from flask import Blueprint, jsonify, session, request
from urllib.request import urlopen, Request
# from urllib.parse import
from json import loads
import os

places_routes = Blueprint('places', __name__)

@places_routes.route('/<lat>/<lng>')
def get_places(lat=None, lng=None):

  response = urlopen(f'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={lat},{lng}&radius=50000&keyword=golf+course&key={os.environ.get("REACT_APP_API_KEY")}')
  data = loads(response.read().decode('utf-8'))
  return {'places': data}


@places_routes.route('/get_location/')
def get_location():

  return {'key': os.environ.get("REACT_APP_API_KEY")}
