import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="verde">SOLUCIONES</span> DE <span className="verde">AUTOCONSTRUCCIÓN</span></h1>
                  <p>Manual para la Autoconstrucción y Mejoramiento de la Construcción</p>
                </div>
                <form>
                  <input type="text" id="login" className="fadeIn second" name="login" placeholder="USUARIO"/>
                  <input type="text" id="password" className="fadeIn third" name="login" placeholder="CONTRASEÑA"/>

                  <input type="submit" className="fadeIn fourth" value="INGRESAR"/>
                  <input type="submit" className="fadeIn fourth" value="REGISTRARSE"/>
                </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
 
export default Home;