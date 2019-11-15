import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo-imcyc.svg';
import logoHabitat from '../../images/logo-habitat.png';

import './Header.css';

class Header extends Component {
  state = {  }
  navUsuario(valor){
    if(valor){

    } else {

    }
  }
  nombreUsuario(valor){
    if(valor){
      return (
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      )
    }
  };
  render() { 
    const { usuario } = this.props;
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
          <img src={logoHabitat} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {this.nombreUsuario(usuario)}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
 
export default Header;