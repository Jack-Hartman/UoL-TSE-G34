#Imports
import import_data
import user_interact
import example_graphs

import numpy as np
import pandas as pd
import datetime as DT 

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
#testinput - input("Type /Help for commands: ")
#if testinput == '/Help':
#    print("placeholer")

# Getting todays date
today = DT.date.today()
# Getting date of 7 days ago?
#week = today - DT.timedelta(days-7)
print(today)

import_data.WHO_Data_Set()
#example_graphs.Infection_Rate_Country()
#import_data.WHO_Data_Set.Test_Graph()
#example_graphs.Data_To_JSON()

example_graphs.Test_Graph()



#Run the app.s
if __name__ == '__main__':
	app.run(host='localhost', debug=True)