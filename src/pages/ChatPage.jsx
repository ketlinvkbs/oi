import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, ListGroup, Stack } from 'react-bootstrap';
// Using React Bootstrap logo temporarily - replace with actual Guru TI logo
import logo from '../assets/react.svg'; // Placeholder for Guru TI logo
import { Link } from 'react-router-dom';

// Estilos
const chatPageStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#10172A',
  color: 'white',
};

const sidebarStyle = {
  backgroundColor: 'rgba(0,0,0,0.2)', // Um pouco mais escuro que o fundo
  height: '100vh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
};

const chatContainerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
};

const messagesAreaStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  padding: '1.5rem',
};

const inputAreaStyle = {
  padding: '1.5rem',
  backgroundColor: 'rgba(0,0,0,0.1)',
};

const messageBubbleStyle = (sender) => ({
  backgroundColor: sender === 'user' ? '#007bff' : '#343a40', // User (azul) vs AI (cinza)
  color: 'white',
  padding: '10px 15px',
  borderRadius: '15px',
  maxWidth: '70%',
  alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
  marginBottom: '10px',
});

function ChatPage() {
  // Mock de dados
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Olá! Eu sou o Guru TI. Como posso ajudar você hoje?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Adiciona a msg do usuário
    const userMessage = { id: messages.length + 1, sender: 'user', text: input };
    
    // Mock da resposta da IA
    const aiMessage = { id: messages.length + 2, sender: 'ai', text: 'Entendido. Processando sua solicitação...' };

    setMessages([...messages, userMessage, aiMessage]);
    setInput('');
  };

  return (
    <Container fluid style={chatPageStyle}>
      <Row g={0}>
        {/* Coluna 1: Sidebar (inspirada no ChatGPT) */}
        <Col md={3} lg={2} style={sidebarStyle}>
          <div className="text-center mb-4">
            <Link to="/">
              <img src={logo} alt="Guru TI Logo" style={{ width: '80px' }} />
              <h5 className="mt-2">Guru TI</h5>
            </Link>
          </div>
          <Button variant="outline-light" className="w-100 mb-3">+ Novo Chat</Button>
          
          <div style={{ flexGrow: 1, overflowY: 'auto' }}>
            <p className="text-muted small">Histórico de Chats</p>
            <ListGroup variant="flush">
              {/* Mock de histórico */}
              <ListGroup.Item action active style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
                Como criar API
              </ListGroup.Item>
              <ListGroup.Item action style={{ backgroundColor: 'transparent', color: 'white' }}>
                Dúvida Docker
              </ListGroup.Item>
            </ListGroup>
          </div>
          
          <div className="mt-auto">
            <Button variant="outline-secondary" className="w-100">Sair</Button>
          </div>
        </Col>

        {/* Coluna 2: Área do Chat */}
        <Col md={9} lg={10} style={chatContainerStyle}>
          
          {/* Área de Mensagens */}
          <div style={messagesAreaStyle}>
            <Stack gap={3} style={{ display: 'flex', flexDirection: 'column' }}>
              {messages.map((msg) => (
                <div key={msg.id} style={messageBubbleStyle(msg.sender)}>
                  {msg.text}
                </div>
              ))}
            </Stack>
          </div>

          {/* Área de Input */}
          <div style={inputAreaStyle}>
            <Form onSubmit={handleSend}>
              <InputGroup size="lg">
                <Form.Control
                  placeholder="Digite sua dúvida aqui..."
                  aria-label="Digite sua dúvida"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ backgroundColor: '#343a40', color: 'white', border: '1px solid #495057' }}
                />
                <Button variant="primary" type="submit">Enviar</Button>
              </InputGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatPage;