import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // npm install react-router-bootstrap
// Using React Bootstrap logo temporarily - replace with actual Guru TI logo
import logo from '../assets/react.svg'; // Placeholder for Guru TI logo

// Estilo CSS in-JS para o layout 'cover'
const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  color: 'white',
  textAlign: 'center',
  backgroundColor: '#10172A', // Fundo 'dark-blue'
};

const headerStyle = {
  marginBottom: 'auto',
};

const mainStyle = {
  // Ocupa o espaço central
};

const footerStyle = {
  marginTop: 'auto',
  color: 'rgba(255, 255, 255, .5)',
};

function HomePage() {
  return (
    <div style={pageStyle}>
      <header style={headerStyle} className="pt-3">
        <Container>
          <Navbar variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                {/* Você pode usar a logo aqui se quiser */}
                {/* <img src={logo} height="30" alt="Guru TI" /> */}
                Guru TI
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#informacoes">Informações</Nav.Link>
                <Nav.Link href="#quemsomos">Quem somos</Nav.Link>
                <Nav.Link href="#contatos">Contatos</Nav.Link>
              </Nav>
              <div className="ms-4">
                <LinkContainer to="/login">
                  <Button variant="outline-light" className="me-2">Entrar</Button>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Button variant="outline-light">Cadastro</Button>
                </LinkContainer>
              </div>
            </Container>
          </Navbar>
        </Container>
      </header>

      <main style={mainStyle} className="px-3">
        {/* Espaço para a logo principal (Mascote) */}
        <img 
          src={logo} 
          alt="Mascote Guru TI" 
          style={{ width: '180px', height: 'auto', marginBottom: '1rem' }} 
        />
        <h1>GURU TI</h1>
        <p className="lead">
          Sua assistente de IA para tirar dúvidas de tecnologia. 
          Descomplicando o mundo da programação e infraestrutura para você.
        </p>
        <p className="lead">
          <LinkContainer to="/chat">
            <Button size="lg" variant="primary">Começar a conversar</Button>
          </LinkContainer>
        </p>
      </main>

      <footer style={footerStyle} className="mt-auto p-3">
        <p>Desenvolvido por Guru TI, {new Date().getFullYear()}.</p>
      </footer>
    </div>
  );
}

export default HomePage;