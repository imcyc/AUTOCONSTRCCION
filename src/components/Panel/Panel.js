import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import SideMenu from './SideMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCarousel from '../ItemCarousel/ItemCarousel';

import './Panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid={true}>
        <Row style={{height: '100vh'}}>
          <Col xs={12} md={12}>
            <SideMenu />
            <div className="contenido">
              <h1><i class="lni-chevron-right"></i> PROCEDIMIENTOS</h1>
              <hr/>
              <ItemCarousel />
              <h1><i class="lni-chevron-right"></i> CÁPSULAS</h1>
              <hr/>
              <ItemCarousel />
              <h1><i class="lni-chevron-right"></i> INSTALACIONES Y ACABADOS</h1>
              <hr/>
              <ItemCarousel />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Panel;