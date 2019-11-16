import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid={true} style={{height: '80vh'}}>
        <Row style={{height: '100%'}}>
          <Col xs={12} md={1} style={{background: '#dedede',height: '100%'}}>
            
          </Col>
          <Col xs={12} md={11}>
            
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Panel;