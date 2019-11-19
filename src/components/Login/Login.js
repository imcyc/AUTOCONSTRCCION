import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderRegistro(valor) {
    if(valor) {
      return (
        <input type="text" className="fadeIn second" name="email" placeholder="CORREO ELECTRÓNICO"/>
      )
    } else {
      return ''
    }
  }
  render() { 
    let { registrarse, registro, login } = this.props;
    return ( 
      <div className="App">
        <header className="App-header">
          <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                  <h1><span className="azul">SOLUCIONESwefwefwef DE</span><br/><span className="verde">AUTOCONSTRUCCIÓN</span></h1>
                  <p>Manualascascacas para la Autoconstrucción y Mejoramiento de la Construcción</p>
                </div>
                <form onSubmit={login}>
                  <input type="text" id="login" className="fadeIn second" name="usuario" placeholder="USUARIO"/>
                  <input type="text" id="password" className="fadeIn third" name="password" placeholder="CONTRASEÑA"/>
                  {this.renderRegistro(registro)}
                  <div className="container">
                    <div className="row">
                      <div className={registro ? 'col-xs-12 col-md-12 col-lg-12' : 'col-xs-6 col-md-6 col-lg-6'}>
                        <button 
                          type="submit" 
                          className="fadeIn fourth">
                            {registro ? 'ENVIAR DATOS' : 'INGRESAR'}
                          <i className="lni-chevron-right"></i> 
                        </button>
                      </div>
                      <div className="col-xs-6 col-md-6 col-lg-6" style={{display: registro ? 'none':'block'}}>
                        <button 
                          onClick={registrarse} 
                          className="fadeIn fourth">
                            REGISTRARSE <i className="lni-chevron-right"></i> 
                        </button>
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
 
export default Login;