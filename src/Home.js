import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    render(){
        return(
            <div className="Home">
          
            <div className="Home__Aside"> </div>

            <div className="Home__Form"> 

            <div className="FormTitle">Log In</div>
            <div className="FormCenter"> 
              <form className="FormFields" onSubmit={this.handleSubmit}>
              
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name"> Nombre Completo </label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Ingrese su nombre completo" name="name" />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email"> Correo </label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Ingrese su correo" name="email" />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password"> Contraseña </label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Ingrese su contraseña" name="password" />
                </div>

                <div className="FormField">
                  <NavLink to="/survey">
                    <button className="FormField__Button">Ingresar</button>
                  </NavLink>
                </div>  

              </form>

            </div>

          </div>

        </div>
        );
    }
        
}
export default Home;