# here we'll have an endpoint which will take in a request,
# and using the hate detection model will return whether the text in the request body is hateful or not. 

from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine
import flask
import json
from flask.wrappers import Response
from flask_restful import Resource, Api, reqparse
import logging as log
import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
api = Api(app)
app.config['MONGODB_SETTINGS'] = {
    'db': os.getenv('DB_NAME'),
    'host': os.getenv('CONNECTION_STRING')
}
db = MongoEngine()
db.init_app(app)

class Domain(db.Document):
    name = db.StringField(required=True, unique=True)
    count = db.IntField(min_value=0, required=True, default=1)
    # meta = {'collection': 'HatefulDomains'}
    def to_json(self):
        return {"name": self.name,
                "count": self.count}


@app.route('/report', methods=['POST'])
def update_record():
    record = json.loads(request.data)
    domain = Domain.objects(name=record['name']).first()
    if not domain:
        create_record()
    else:
        domain.update(inc__count=1)
    return jsonify(domain.to_json())


@app.route('/report', methods=['PUT'])
def create_record():
    record = json.loads(request.data)
    domain = Domain(name=record['name'],
                count=1)
    domain.save()
    return jsonify(domain.to_json())

@app.route('/detect', methods=["POST"])
def post():
    print(request.get_json())
    resp = flask.Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp




@app.route('/test', methods=["GET"])
def get():
    resp = flask.Response()
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.debug = True
    app.run()  # run our Flask app