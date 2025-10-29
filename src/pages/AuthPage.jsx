import React, { useState } from 'react';
import { Container, Form, Button, Card, Tabs, Tab, Alert } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
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
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from location state or default to home
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await login(loginEmail, loginPassword);
      if (result.success) {
        // Redirect to the intended page or chat page
        navigate(from === '/login' ? '/chat' : from, { replace: true });
      } else {
        setError(result.error || 'Erro ao fazer login. Verifique suas credenciais.');
      }
    } catch (err) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await register(registerName, registerEmail, registerPassword);
      if (result.success) {
        // After successful registration, redirect to chat
        navigate('/chat', { replace: true });
      } else {
        setError(result.error || 'Erro ao registrar. Tente novamente.');
      }
    } catch (err) {
      setError('Erro ao registrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

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

          {error && <Alert variant="danger">{error}</Alert>}

          <Tabs defaultActiveKey="login" id="auth-tabs" fill variant="pills" className="mb-3">
            <Tab eventKey="login" title="Entrar">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="seu @email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Sua senha"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="Lembrar de mim" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="register" title="Cadastro">
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formRegisterName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Seu nome"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="seu @email.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRegisterPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Crie uma senha"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? 'Registrando...' : 'Criar conta'}
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