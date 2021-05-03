
import React, { Component } from 'react';
import NewsAPI from 'newsapi';


class News extends Component {
    constructor(props) {
        super (props);
        
        this.state = { News: 'loading'}
        this.newsapi = new NewsAPI('656d88bc51824b7b9b1a695745fdcef2');
    
    }

    componentDidMount() {
		// GET request using fetch with error handling
	}

    render() {
        return(
            <h1>Hello</h1>
        );
    }
}

export default News;