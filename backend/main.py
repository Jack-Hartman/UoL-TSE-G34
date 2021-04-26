from flask import Flask
from flask import request
from newsapi import NewsApiClient


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

@app.route('/worldwide', methods=['GET'])
def index():
    # arg = request.args.get('country')
    # print('arg')
    # print(arg)
    # return_data_index = WHO_DATA_SET.find_country_index(arg)
    # return data[return_data_index]
    country = request.args.get("country")
    index = WHO_DATA_SET.find_country_index(country)
    rtn = data[index]
    return rtn


@app.route('/defaultData', methods=['GET'])
def defaultData():
    return {
        'names': ['Deaths / Recoveries', 'Information for each country in: ', 'Deaths / Recoveries / Living / Infected'],
        'continent': 'Europe',
        'Country': 'UK'
    }


if __name__ == '__main__':
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



