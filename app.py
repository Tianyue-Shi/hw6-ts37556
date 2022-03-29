import os

from flask import Flask, jsonify
from flask.helpers import send_from_directory
from markupsafe import escape

app = Flask(__name__, static_folder='./build', static_url_path='/')

# dictionary containing first and last names
dict = {
    "Tianyue": "Shi",
    "Justin": "Shi",
    "John": "Cena",
    "Keanu": "Reeves"
}


# function to get last name from username
@app.route("/user/<name>", methods=["GET"])
def getLastName(name: str):
    if name in dict:
        return jsonify(output=dict[name])
    return jsonify(output="Name not found")


@app.route('/')
def index():
    # return app.send_static_file('index.html')
    return send_from_directory(app.static_folder, "index.html")


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
