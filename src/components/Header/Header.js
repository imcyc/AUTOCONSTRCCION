import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo-imcyc.svg';
import logoHabitat from '../../images/logo-habitat.png';
import './Header.css';

const Header = (props) => {
    const { nombre } = props;
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
          <img src={logoHabitat} alt="Manual de autoconstrucción" title="Manual de autoconstrucción" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {nombre && (
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end buscador">
            <Form inline>
              <FormControl type="text" placeholder="BUSCAR CONTENIDOS" className="mr-sm-2" />
              <Button variant="outline-dark">BUSCAR</Button>
            </Form>
          </Navbar.Collapse>
        )}
        {nombre && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">{nombre}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        )}
      </Navbar>
    );
}
 
export default Header;