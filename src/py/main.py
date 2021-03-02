#Imports
from flask import Flask
from flask_cors import CORS
import Import_data
import User_Interact
import numpy as np
import pandas as pd

# Create Flask App
app = Flask(__name__)
CORS(app)

#Routing
@app.route('/')
def hello():
    return 'hello lincoln group work'

# /help command

# Getting todays date
today = pd.to_datetime("today")

# Getting date of 7 days ago?

print(today)
Import_data.Import.Read_File()
User_Interact.Input.Selection()


#Run the app.s
if __name__ == '__main__':
    app.run(host='localhost', debug=True)