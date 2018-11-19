import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
import Auth from './Auth/Auth';

const auth = new Auth();

class Home extends Component {
  
    render(){
      function login(e) {
    e.preventDefault();
    auth.login();
  }
        return(
          <div className="Home">
            <div className="Home__Aside"> </div>
            <div className="Home__Form"> 
              <div className="FormTitle">Bienvenido al sistema de censo de Bolumbia</div>
              <div className="FormCenter"> 
                <form className="FormFields" onSubmit={this.handleSubmit}>
                  <div className="FormField">
                      <button className="FormField__Button" onClick={login}>Ingresar</button>
                  </div>  
                </form>
              </div>
            </div>
          </div>
        );
    }
        
}
export default Home;