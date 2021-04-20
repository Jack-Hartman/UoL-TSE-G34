
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
		fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-03-01&sortBy=publishedAt&apiKey=656d88bc51824b7b9b1a695745fdcef2')
			.then(async res => {
				const data = await res.json();

				// Check for error response:
				if (!res.ok) {
					const error = (data && data.message) || res.statusText;
					return Promise.reject(error);
				}

				this.setState({ News: 'loaded' });
				console.log(res.json);
			})
			.catch(error => {
				this.setState({ News: 'absent' });
				console.error('Error: ', error);
			});
    }

    render() {
        return(
            <h1>Hello</h1>
        );
    }
}

export default News;