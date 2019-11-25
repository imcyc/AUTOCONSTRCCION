import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Panel from './components/Panel/Panel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registro: false,
      usuario: false,
      mensajeLog: '',
      datosUsuario: {
        nombre: localStorage.getItem('nombre') || '',
        email: localStorage.getItem('email') || ''
      }
    }
  }
  componentDidMount() {
    axios.get(`https://18.219.47.222/apis/autoconstruccion/usuarios.php`)
      .then(res => {
        // const candidatos = res.data;
        // console.log(candidatos);
        //this.setState({ candidatos });
      })
  }
  registrarse = (e) => {
    e.preventDefault();
    this.setState({
      registro: !this.state.registro,
      mensajeLog: ''
    })
    
  }
  login = (e) => {
    e.preventDefault();
    const usuario = {
      email: e.target.email.value,
      pw: e.target.password.value
    }
    axios.post(`https://18.219.47.222/apis/autoconstruccion/usuario.php`, { usuario })
      .then(res => {
        if(res.data.usuario === 'usuario'){
          console.log('yea');
          this.setState({
            usuario: true,
            mensajeLog: '',
          });
          localStorage.setItem('nombre', res.data.nombre);
          localStorage.setItem('email', res.data.email);
        } else if(res.data === 'nousuario'){
          console.log('NOyea');
          this.setState({
            usuario: false,
            mensajeLog: 'Datos de usuario incorrectos!'
          });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  loginU = (e) => {
    e.preventDefault();
    this.setState({
      registro: !this.state.registro
    })
  }
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header 
            datosUsuario={this.state.datosUsuario}
          />
          <Switch>
            <Route 
              exact 
              path="/" 
              component={(props) => <Home 
                {...props} 
                registrarse={this.registrarse} 
                registro={this.state.registro}
                login={this.login}
                loginU={this.loginU}
                usuario={this.state.usuario}
                mensajeLog={this.state.mensajeLog}
                datosUsuario={this.state.datosUsuario}
              />}
            />
            <Route 
              exact 
              path={`/panel/:seccion`} 
              component={(props) => <Panel 
                {...props}
                datosUsuario={this.state.datosUsuario}
              />}
            />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
