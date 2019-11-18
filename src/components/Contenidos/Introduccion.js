import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import SideMenu from '../Panel/SideMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid={true}>
        <Row style={{height: '100vh'}}>
          <Col xs={1} md={1}>
            <SideMenu />
          </Col>
          <Col xs={11} md={11}>
            INTRODUCCION
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Panel;