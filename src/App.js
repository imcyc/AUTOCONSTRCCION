import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Panel from './components/Panel/Panel';
import Introduccion from './components/Contenidos/Introduccion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registro: false,
      usuario: false,
      datosUsuario: {
        nombre: '',
        email: ''
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
      registro: !this.state.registro
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
        console.log('el nombre supuesto: ' + res.data.usuario);
        if(res.data.usuario === 'usuario'){
          this.setState({
            usuario: true,
            datosUsuario: {
              nombre: res.data.nombre,
              email: res.data.email
            }
          });
          console.log('elusuario ' + this.state.datosUsuario.nombre);
        }
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
      <HashRouter basename='/'>
        <div>
          <Header 
            usuario={this.state.usuario} 
            nombre={this.state.datosUsuario.nombre} 
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
                
              />}
            />
            <Route 
              exact 
              path="/panel" 
              component={(props) => <Panel 
                {...props}
                datosUsuario={this.state.datosUsuario}
              />}
            />
            <Route 
              exact 
              path="/introduccion" 
              component={(props) => <Introduccion 
                {...props}
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
