import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Survey from './Survey'
import Home from './Home'
import Callback from './Callback/Callback'
import './App.css';
import Auth from './Auth/Auth'
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/survey" component={Survey}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
    );
    
  }
}

export default App;
