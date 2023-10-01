import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Business from './components/Business';
//import NewsItem from './components/NewsItem';
import Entertainment from './components/Entartainment';
import Health from './components/Health';
//import General from './components/General';
import Science from './components/Science';
import Sports from './components/Sports';
import Technology from './components/Technology';
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/general' element={<News pageSize={6} />} />
            <Route exact path='/general' element={<News pageSize={6} category='general' />} />
            <Route exact path='/business' element={<Business pageSize={6} category='business' />} />
            <Route exact path='/entertainment' element={<Entertainment pageSize={6} category='entertainment' />} />
            <Route exact path='/health' element={<Health pageSize={6} category='health' />} />
            <Route exact path='/science' element={<Science pageSize={6} category='science' />} />
            <Route exact path='/sports' element={<Sports pageSize={6} category='sports' />} />
            <Route exact path='/technology' element={<Technology pageSize={6} category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

