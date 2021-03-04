#Imports
from flask import Flask
from flask_cors import CORS

# Create Flask App
app = Flask(__name__)
CORS(app)

#Routing
@app.route('/')
def hello():
    return 'hello lincoln group work'





#Run the app.s
if __name__ == '__main__':
    app.run(host='95.111.246.85', debug=True)
