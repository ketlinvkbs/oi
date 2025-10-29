// /src/components/AppNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Guru TI</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#informacoes">Informações</Nav.Link>
            <Nav.Link href="#quemsomos">Quem somos</Nav.Link>
            <Nav.Link href="#contatos">Contatos</Nav.Link>
          </Nav>
          <div>
            <LinkContainer to="/login">
              <Button variant="outline-light" className="me-2">Entrar</Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button variant="outline-light">Cadastro</Button>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;