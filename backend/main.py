from decouple import config

import os
import sys
import subprocess
subprocess.call(['pip3', 'install', '-r', 'requirements.txt'])

from flask import Flask
from flask_cors import CORS
from flask import request
from default_json_data import Default_JSON_Data
from countries import Countries

import import_data
import user_interact
import example_graphs

import numpy as np
import pandas as pd
import datetime as DT 
import json

WHO_DATA_SET = import_data.WHO_Data_Set() 
data = json.loads(WHO_DATA_SET.rtn_dt_json())

# Loop through
# Look at countries to build an array of them.

WHO_DATA_SET.sortCountries(data)

app = Flask(__name__)
CORS(app)

# Functions
def to_json(obj):
    json_str = json.dumps(obj.__dict__)
    return json.loads(json_str)
    
@app.route('/', methods=['GET'])
def index():
    return {
	    'message': 'API is operational',
        'status': '200'
    }

@app.route('/worldwide', methods=['GET'])
def worldwide():
    # arg = request.args.get('country')
    # print('arg')
    # print(arg)
    # return_data_index = WHO_DATA_SET.find_country_index(arg)
    # return data[return_data_index]

    # Get Country Data:
    country = request.args.get("country")
    index = WHO_DATA_SET.find_country_index(country)
    country_rtn = data[index]

    # Get Global Data:
    global_rtn = data[0]

    # Get Continental Data:
    countries_within_region = WHO_DATA_SET.find_countries_within_region(data, data[index]["WHO Region"])
    

    return to_json(Default_JSON_Data(global_rtn, country_rtn, countries_within_region))

@app.route('/who-countries', methods=['GET'])
def who_countries():
    rtn_countries = []

    for i in data:
        rtn_countries.append(i["Name"])

    my_json = to_json(Countries(rtn_countries))
    return my_json

@app.route('/defaultData', methods=['GET'])
def defaultData():
    return {
        'names': ['Deaths / Recoveries', 'Information for each country in: ', 'Deaths / Recoveries / Living / Infected'],
        'continent': 'Europe',
        'Country': 'UK'
    }
    
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET'])
def catch_all(path):
    return {
        'status': '404',
	    'message': 'Request not found'
    }

if config('environment') == "production":
    app.run()
elif __name__ == '__main__':
    app.run(debug=True)


# /help command
#testinput - input("Type /Help for commands: ")
#if testinput == '/Help':
#    print("placeholer")

# # Getting todays date
# today = DT.date.today()
# # Getting date of 7 days ago?
# #week = today - DT.timedelta(days-7)
# print(today)

# import_data.WHO_Data_Set()
# a = example_graphs.Data_To_JSON(["India"], "Cases - cumulative total")
# #import_data.WHO_Data_Set.Test_Graph()
# #example_graphs.Data_To_JSON()

# example_graphs.Test_Graph()
# print('hello')
# print(a)
# #Run the app.s
# #if __name__ == '__main__':
# #	app.run(host='localhost', debug=True)



