from flask import Blueprint, jsonify, session, request
from urllib.request import urlopen, Request

from json import loads
import os

search_routes = Blueprint('search', __name__)

@search_routes.route('/<query>/')
def search(query):

  response = urlopen(f'https://maps.googleapis.com/maps/api/place/textsearch/json?query={query}&key={os.environ.get("REACT_APP_API_KEY")}')
  data = loads(response.read().decode('utf-8'))
  return {'search': data}
