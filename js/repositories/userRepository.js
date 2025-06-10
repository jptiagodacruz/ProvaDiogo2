const API_URL = 'https://mini-twitter-api-vy9q.onrender.com/api';

function getAuthHeaders() {
  const token = localStorage.getItem('token'); 
  return {
    'Content-Type': 'application/json',   
    Authorization: `Bearer ${token}`,       
  };
}

/**
 * Busca o perfil do usuário autenticado.
 * @returns {Promise<Object>} - Dados do perfil do usuário
 */
export async function getProfile() {
  // Faz uma requisição GET para o endpoint /users/profile com autenticação
  const res = await fetch(`${API_URL}/users/profile`, {
    headers: getAuthHeaders(), 
  });

  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao obter perfil'); 
  }

  return res.json(); 
}

/**
 * Atualiza as informações do perfil do usuário autenticado.
 * @param {Object} param0 - Objeto contendo username e email atualizados
 * @param {string} param0.username - Novo nome de usuário
 * @param {string} param0.email - Novo email
 * @returns {Promise<Object>} - Dados atualizados do perfil
 */
export async function updateProfile({ username, email }) {
  // Faz uma requisição PUT para atualizar o perfil do usuário
  const res = await fetch(`${API_URL}/users/profile`, {
    method: 'PUT',               
    headers: getAuthHeaders(),   
    body: JSON.stringify({ username, email }), 
  });

  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao atualizar perfil'); 
  }

  return res.json(); 
}