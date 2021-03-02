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


today = pd.to_datetime("today")

# Getting date of 7 days ago?

print(today)


#Run the app.s
if __name__ == '__main__':
    app.run(host='localhost', debug=True)