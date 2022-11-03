import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  // createBrowserRouter,
  // createRoutesFromElements,
  BrowserRouter as Router,
  Routes,
  Route
  // RouterProvider
} from "react-router-dom";

// const router = createBrowserRouter([
// {path: "/",element:(<><Navbar/> <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="general"/></>), children:[
// {path: "business",element: <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="business"/>},
// {path: "entertainment",element: <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="entertainment"/>},
// {path: "health",element: <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="health"/>},
// {path: "science",element: <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="science"/>},
// {path: "sports",element: <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="sports"/>},
// {path: "technology",element: <News setProgress =  {this.setProgress} apiKey={this.apiKey} category="technology"/>}
// ]},
// ]);

export default class App extends Component {
  state = {
    progress: 0
  }

  apiKey = process.env.REACT_APP_NEWS_API

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div>
            <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}
            />
          </div>
          <Routes>
            <Route exact path="/" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="general" category="general" />} />
            <Route exact path="/business" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="health" category="health" />} />
            <Route exact path="/science" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="science" category="science" />} />
            <Route exact path="/sports" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress =  {this.setProgress} apiKey={this.apiKey} key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
