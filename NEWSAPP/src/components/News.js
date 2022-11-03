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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      lastPage: 1
    }

    document.title = `${this.props.category} - newsDonkey`;
  }

  async updatePage() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      lastPage: Math.floor(parsedData.totalResults / this.props.pageSize)
    })

    this.props.setProgress(100);
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
        <h1>Top {this.props.category==="general"?'': this.props.category} Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imgUrl={element.urlToImage?element.urlToImage:"https://staticg.sportskeeda.com/editor/2022/11/92dd1-16674272943139-1920.jpg"} newsUrl={element.url} author={element.author ? element.author : 'Unknown Author'} />
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



