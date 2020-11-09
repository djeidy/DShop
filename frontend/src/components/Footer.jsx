import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col className="text-center py-3 bg-dark text-light">
            Copyright &copy; DiaraShop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;