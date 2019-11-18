import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
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
      usuario: false
    }
  }
  registrarse = (e) => {
    e.preventDefault();
    this.setState({
      registro: !this.state.registro
    })
  }
  login = (e) => {
    e.preventDefault();
    this.setState({
      usuario: true
    });
  }
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Header usuario={this.state.usuario} />
          <Switch>
            <Route 
              exact 
              path="/" 
              component={(props) => <Home 
                {...props} 
                registrarse={this.registrarse} 
                registro={this.state.registro}
                login={this.login}
                usuario={this.state.usuario}
              />}
            />
            <Route 
              exact 
              path="/panel" 
              component={(props) => <Panel 
                {...props}
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
