#Imports
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'hello lincoln group work'

if __name__ == '__main__':
    app.run(host='localhost', debug=True)