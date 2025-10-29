// /src/services/api.js
// Configuração do Axios, apenas o setup
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api', // Base URL da API
  timeout: 10000, // Tempo limite para requisições
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors para adicionar token de autenticação, se necessário
api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;