import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import SideMenu from './SideMenu';
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
        <Row style={{height: '100%'}}>
          <Col xs={12} md={12}>
            <SideMenu />
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Panel;