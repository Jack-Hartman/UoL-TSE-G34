from flask import Flask
from newsapi import NewsApiClient


import import_data
import user_interact
import example_graphs

import numpy as np
import pandas as pd
import datetime as DT 

app = Flask(__name__)
newsapi = NewsApiClient(api_key='656d88bc51824b7b9b1a695745fdcef2')


# /v2/top-headlines
#top_headlines = newsapi.get_top_headlines(q='bitcoin',
#                                          sources='bbc-news,the-verge',
#                                          category='business',
#                                          language='en',
#                                          country='us')

@app.route('/api', methods=['GET'])
def index():
    return {
        'name': 'Hello World'
    }

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

# Getting todays date
today = DT.date.today()
# Getting date of 7 days ago?
#week = today - DT.timedelta(days-7)
print(today)

import_data.WHO_Data_Set()
example_graphs.Data_To_JSON(["India"], "Cases - cumulative total")
#import_data.WHO_Data_Set.Test_Graph()
#example_graphs.Data_To_JSON()

example_graphs.Test_Graph()


#Run the app.s
#if __name__ == '__main__':
#	app.run(host='localhost', debug=True)


