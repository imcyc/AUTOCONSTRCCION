import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo-imcyc.svg';
import logoHabitat from '../../images/logo-habitat.png';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  menuUsuario(valor){
    if(valor){
      return (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )
    }
  }
  nombreUsuario(valor){
    if(valor){
      return (
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">{valor}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      )
    }
  };
  render() { 
    const { usuario, nombre } = this.props;
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
          <img src={logoHabitat} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {this.menuUsuario(usuario)}
        {this.nombreUsuario(nombre)}
      </Navbar>
    );
  }
}
 
export default Header;