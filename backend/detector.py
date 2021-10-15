# here we'll have an endpoint which will take in a request,
# and using the hate detection model will return whether the text in the request body is hateful or not. 

from flask import Flask
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)


class Detector(Resource):
    pass

api.add_resource(Detector, '/detector')  # '/detector' is our entry point


if __name__ == '__main__':
    app.run()  # run our Flask app