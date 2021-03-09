#Imports
import import_data
import user_interact
import example_graphs

import numpy as np
import pandas as pd

from flask import Flask
from flask_cors import CORS


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

import_data.WHO_Data_Set()
#import_data.WHO_Data_Set.Test_Graph()
O1 = user_interact.UserInput()
O1.Checker()

#example_graphs.Test_Graph()



#Run the app.s
if __name__ == '__main__':
	app.run(host='localhost', debug=True)