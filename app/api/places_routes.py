from flask import Blueprint, jsonify, session, request
from urllib.request import urlopen, Request
# from urllib.parse import
from json import loads
import os

places_routes = Blueprint('places', __name__)

@places_routes.route('/')
def get_places():
  response = urlopen(f'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.465038,-71.008530&radius=2000&key={os.environ.get("REACT_APP_API_KEY")}')
  data = loads(response.read().decode('utf-8'))
  return {'places': data}


@places_routes.route('/get_location', methods=['POST'])
def get_places():
  response = urlopen(f'https://www.googleapis.com/geolocation/v1/geolocate?key={os.environ.get("REACT_APP_API_KEY")}')
  data = loads(response.read().decode('utf-8'))
  return {'location': data}
