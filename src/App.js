import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Panel from './components/Panel/Panel';

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
    const { usuario } = this.state;
    return (
      <BrowserRouter basename='/'>
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
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
