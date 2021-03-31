#Imports
from flask import Flask
from flask_cors import CORS

# Create Flask App
app = Flask(__name__)
CORS(app)

#Routing
@app.route('/')
def hello():
    return 'hello lincoln group work-working'





#Run the app.s
if __name__ == '__main__':
    context = ('/var/www/api/keys/fullchain.pem', '/var/www/api/keys/key.pem')
    app.run(ssl_context=context, host='api.publiczeus.com', debug=True)