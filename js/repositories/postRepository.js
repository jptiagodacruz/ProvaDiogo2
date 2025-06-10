const API_URL = 'https://mini-twitter-api-vy9q.onrender.com/api';


function getAuthHeaders() {
  const token = localStorage.getItem('token'); 
  return {
    'Content-Type': 'application/json', 
    Authorization: `Bearer ${token}`,   
  };
}

/**
 * Cria uma nova postagem no sistema.
 * @param {string} content - Conteúdo da postagem (até 280 caracteres)
 * @returns {Promise<Object>} - Retorna os dados da postagem criada
 */
export async function createPost(content) {
  // Faz uma requisição POST para o endpoint /posts com o conteúdo da postagem
  const res = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: getAuthHeaders(), 
    body: JSON.stringify({ content }), 
  });

  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao criar postagem'); 
  }

  return res.json(); // Retorna os dados da postagem criada
}

/**
 * Recupera todas as postagens do usuário logado.
 * @returns {Promise<Array>} - Retorna um array com as postagens do usuário
 */
export async function getMyPosts() {
  // Faz uma requisição GET para obter postagens do usuário autenticado
  const res = await fetch(`${API_URL}/posts/my-posts`, {
    headers: getAuthHeaders(), 
  });

  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao carregar postagens');
  }

  return res.json(); 
}

/**
 * Deleta uma postagem específica com base no ID.
 * @param {string} id - ID da postagem a ser deletada
 * @returns {Promise<Object>} - Retorna uma confirmação da exclusão
 */
export async function deletePost(id) {
  // Envia requisição DELETE para remover a postagem com o ID especificado
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(), 
  });

  if (!res.ok) {
    const errorData = await res.json(); 
    throw new Error(errorData.message || 'Erro ao deletar postagem');
  }

  return res.json(); 
}