import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        
        <div className="App__Aside"> </div>

        <div className="App__Form"> 

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
                <button className="FormField__Button">Ingresar</button>
              </div>

            </form>

          </div>

        </div>

      </div>
    );
    
  }
}

export default App;
