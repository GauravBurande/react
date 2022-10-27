import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      lastPage: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=d627e38776c14c24834441d2da071a07&page=1&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, lastPage: Math.ceil(parsedData.totalResults/20)})
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=d627e38776c14c24834441d2da071a07&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log('previous');

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=d627e38776c14c24834441d2da071a07&page=${this.state.page + 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imgUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container my-5 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page === 5 || this.state.page === this.state.lastPage} type="button" className="btn btn-dark" onClick={this.handleNext}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News




/*my api key: d627e38776c14c24834441d2da071a07 */
