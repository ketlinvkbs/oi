import React from 'react';
import { Container, Form, Button, Card, Tabs, Tab } from 'react-bootstrap';
// Using React Bootstrap logo temporarily - replace with actual Guru TI logo
import logo from '../assets/react.svg'; // Placeholder for Guru TI logo
import { Link } from 'react-router-dom';

// Estilo para centralizar
const pageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#10172A',
};

const cardStyle = {
  width: '100%',
  maxWidth: '420px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fundo do card levemente transparente
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
};

function AuthPage() {
  return (
    <div style={pageStyle}>
      <Container>
        <Card style={cardStyle} className="p-4 p-md-5 mx-auto">
          <div className="text-center mb-4">
            <Link to="/">
              <img src={logo} alt="Guru TI Logo" style={{ width: '100px' }} />
            </Link>
            <h1 className="h3 mt-3 mb-3 fw-normal">Bem-vindo(a)</h1>
          </div>

          <Tabs defaultActiveKey="login" id="auth-tabs" fill variant="pills" className="mb-3">
            <Tab eventKey="login" title="Entrar">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="seu @email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Sua senha" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Lembrar de mim" />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Entrar
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="register" title="Cadastro">
              <Form>
                <Form.Group className="mb-3" controlId="formRegisterName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Seu nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="seu @email.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Crie uma senha" />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Criar conta
                </Button>
              </Form>
            </Tab>
          </Tabs>

          <p className="mt-5 mb-3 text-muted text-center">&copy; Guru TI {new Date().getFullYear()}</p>
        </Card>
      </Container>
    </div>
  );
}

export default AuthPage;