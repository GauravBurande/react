import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  // createBrowserRouter,
  // createRoutesFromElements,
  BrowserRouter as Router,
  Routes,
  Route
  // RouterProvider
} from "react-router-dom";

// const router = createBrowserRouter([
// {path: "/",element:(<><Navbar/> <News category="general"/></>), children:[
// {path: "business",element: <News category="business"/>},
// {path: "entertainment",element: <News category="entertainment"/>},
// {path: "health",element: <News category="health"/>},
// {path: "science",element: <News category="science"/>},
// {path: "sports",element: <News category="sports"/>},
// {path: "technology",element: <News category="technology"/>}
// ]},
// ]);

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<News key="general" category="general"/>}/>
          <Route exact path="/business" element={<News key="business" category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>}/>
          <Route exact path="/health" element={<News key="health" category="health"/>}/>
          <Route exact path="/science" element={<News key="science" category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
