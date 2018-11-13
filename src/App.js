import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import Survey from './Survey'
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/survey" component={Survey}/>
        </div>
      </Router>
    );
    
  }
}

export default App;
