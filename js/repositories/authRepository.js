const API_URL = 'https://mini-twitter-api-vy9q.onrender.com/api';

/**
 * Função responsável por registrar um novo usuário.
 * @param {Object} param0 - Objeto contendo username, email e password
 * @returns {Promise<Object>} - Retorna os dados do usuário e token da API
 */
export async function register({ username, email, password }) {
  // Realiza uma requisição POST para o endpoint de registro
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ username, email, password }), 
  });

  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao registrar usuário'); 
  }

  return res.json(); 
}

/**
 * Função responsável por fazer login do usuário.
 * @param {Object} param0 - Objeto contendo email e password
 * @returns {Promise<Object>} - Retorna os dados do usuário e token da API
 */
export async function login({ email, password }) {
  // Realiza uma requisição POST para o endpoint de login
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }), 
  });

  // Verifica se houve erro na resposta
  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao fazer login'); 
  }

  return res.json(); 
}