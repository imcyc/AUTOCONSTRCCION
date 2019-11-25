import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import Carousel from './Carousel/Carousel';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderRegistro(valor) {
    if(valor) {
      return (
        <input type="email" className="fadeIn second" name="email2" placeholder="CORREO ELECTRÓNICO"/>
      )
    } else {
      return ''
    }
  }
  tituloRegistro(valor){
    if(valor){
      return(
        <h3 style={{color: '#6db33f'}}><b>REGÍSTRESE DE MANERA GRATUITA</b></h3>
      )
    }
  }
  render() {
    let { registrarse, registro, login, loginU, usuario, mensajeLog } = this.props;
    if(usuario){
      return (
        <Redirect to="/panel/introduccion" />
      );
    }
    return ( 
      <div className="App">
        <Carousel />
        <header className="App-header">
          <div className="wrapper fadeInDown" style={{zIndex: '10'}}>
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="azul">SOLUCIONES DE</span><br/><span className="verde">AUTOCONSTRUCCIÓN</span></h1>
                  <p>Manual para la Autoconstrucción y Mejoramiento de la Construcción</p>
                  <h3 className="rojo">{mensajeLog}</h3>
                  {this.tituloRegistro(registro)}
                </div>
                <form onSubmit={login}>
                  <input type="email" id="login" className="fadeIn second" name="email" placeholder="CORREO ELECTRÓNICO"/>
                  <input type="password" id="password" className="fadeIn third" name="password" placeholder="CONTRASEÑA"/>
                  {this.renderRegistro(registro)}
                  <div className="container loged">
                    <div className="row">
                      <div className={registro ? 'col-xs-12 col-md-12 col-lg-12' : 'col-xs-6 col-md-6 col-lg-6'}>
                        <button 
                          type="submit"
                          className="fadeIn fourth mb-0">
                            {registro ? 'REGISTRARSE E INGRESAR' : 'INGRESAR'}
                            <i className="lni-chevron-right"></i> 
                        </button>
                        {registro ? <Link onClick={loginU} style={{fontSize: '15px'}}>Ya tiene una cuenta?, Ingrese dando click aquí</Link> : ''}
                      </div>
                      <div className="col-xs-6 col-md-6 col-lg-6" style={{display: registro ? 'none' : 'block'}}>
                        <button onClick={registrarse} className="fadeIn fourth">REGISTRARSE <i className="lni-chevron-right"></i> </button>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
 
export default Home;