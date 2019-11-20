import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    axios.get(`https://18.219.47.222/apis/bolsadetrabajo/candidatos.php`)
      .then(res => {
        const candidatos = res.data;
        console.log(candidatos);
        //this.setState({ candidatos });
      })
  }
  renderRegistro(valor) {
    if(valor) {
      return (
        <input type="text" className="fadeIn second" name="login" placeholder="CORREO ELECTRÓNICO"/>
      )
    } else {
      return ''
    }
  }
  render() {
    let { registrarse, registro, login, loginU, usuario } = this.props;
    if(usuario){
      return (
        <Redirect to="/panel" />
      );
    }
    return ( 
      <div className="App">
        <header className="App-header">
          <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="azul">SOLUCIONES DE</span><br/><span className="verde">AUTOCONSTRUCCIÓN</span></h1>
                  <p>Manual para la Autoconstrucción y Mejoramiento de la Construcción</p>
                </div>
                <form onSubmit={login}>
                  <input type="text" id="login" className="fadeIn second" name="login" placeholder="USUARIO"/>
                  <input type="text" id="password" className="fadeIn third" name="login" placeholder="CONTRASEÑA"/>
                  {this.renderRegistro(registro)}
                  <div className="container loged">
                    <div className="row">
                      <div className={registro ? 'col-xs-12 col-md-12 col-lg-12' : 'col-xs-6 col-md-6 col-lg-6'}>
                        <button 
                          type="submit" 
                          className="fadeIn fourth">
                            {registro ? 'REGISTRARSE E INGRESAR' : 'INGRESAR'}
                            <i className="lni-chevron-right"></i> 
                        </button>
                        {registro ? <Link onClick={loginU} style={{fontSize: '15px'}}>Ya tiene una cuenta?, Ingrese dando click aquí</Link> : ''}
                      </div>
                      <div className="col-xs-6 col-md-6 col-lg-6" style={{display: registro ? 'none':'block'}}>
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