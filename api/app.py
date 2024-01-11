import exportersindia as exp
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/ping', methods=['GET'])
def ping():
    return exp.get_exporters_products("kids")

@app.route('/pong', methods=['GET'])
def pong():
    return 'pong'

if __name__ == '__main__':
    app.run(debug=True)