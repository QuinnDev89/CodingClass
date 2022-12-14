from glob import glob
from urllib import request
from wsgiref.util import request_uri
from flask import Flask, jsonify, request, url_for, Response
from flask_cors import CORS, cross_origin
from datetime import datetime, timezone
import requests

app = Flask(__name__)
CORS(app)

###############################################################################################################
# ---------------------------------------------------------------------
# -- AUTHOR : Alex Ri
# -- Date : 06-12-2022
# -- Project : Proyecto final ComuGames Redes
# -- Description : Route to Login

@app.route('/')
def pruebaget():
    return "Hello" 

if __name__ == '__main__':
    app.run(debug=True, port=9000, host="0.0.0.0", threaded=True)