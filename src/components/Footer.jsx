// /src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Desenvolvido por Guru TI, {new Date().getFullYear()}.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;