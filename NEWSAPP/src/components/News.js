import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    category: 'general',
    country: 'in',
    pageSize: 8,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      lastPage: 1
    }
  }

  async updatePage() {
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&country=${this.props.country}&apiKey=d627e38776c14c24834441d2da071a07&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      lastPage: Math.floor(parsedData.totalResults / this.props.pageSize)
    })
  }

  componentDidMount() {
    this.updatePage()
  }

  handlePrevious = () => {
    this.setState({
      page: this.state.page - 1
    });
    this.updatePage()
  }

  handleNext = () => {
    this.setState({
      page: this.state.page + 1
    });
    this.updatePage()
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : 'Unknown Author'} />
            </div>
          })}
        </div>
        <div className="container my-5 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page === Math.floor(100 / this.props.pageSize) || this.state.page === this.state.lastPage} type="button" className="btn btn-dark" onClick={this.handleNext}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News



