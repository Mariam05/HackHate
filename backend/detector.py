# here we'll have an endpoint which will take in a request,
# and using the hate detection model will return whether the text in the request body is hateful or not. 

from flask import Flask, request
import flask
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)


@app.route('/detect', methods=["POST"])
def post():
    resp = flask.Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/test', methods=["GET"])
def get():
    resp = flask.Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.debug = True
    app.run()  # run our Flask app