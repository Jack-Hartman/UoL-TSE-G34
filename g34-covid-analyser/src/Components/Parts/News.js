
import React, { Component } from 'react';
import NewsAPI from 'newsapi';


class News extends Component {
    constructor(props) {
        super (props);
        
        this.state = { News: 'loading'}
        this.newsapi = new NewsAPI('656d88bc51824b7b9b1a695745fdcef2');
    
    }

    componentDidMount() {
        this.newsapi.v2.topHeadlines({
            sources: 'bbc-news,the-verge',
            q: 'bitcoin',
            category: 'business',
            language: 'en',
            country: 'us'
          }).then(response => {
            console.log(response);
            /*
              {
                status: "ok",
                articles: [...]
              }
            */
          });
    }

    render() {
        return(
            <h1>Hello</h1>
        );
    }
}

export default News;