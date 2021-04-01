from flask import Flask
from newsapi import NewsApiClient

app = Flask(__name__)
newsapi = NewsApiClient(api_key='656d88bc51824b7b9b1a695745fdcef2')

# /v2/top-headlines
top_headlines = newsapi.get_top_headlines(q='bitcoin',
                                          sources='bbc-news,the-verge',
                                          category='business',
                                          language='en',
                                          country='us')

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