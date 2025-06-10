import * as postRepo from '../repositories/postRepository.js';
import { renderPosts, renderCharCount } from '../views/feedView.js';

// Seleciona elementos do DOM usados no feed
const postForm = document.getElementById('post-form');         
const postContent = document.getElementById('post-content');   
const charCount = document.getElementById('char-count');       
const logoutBtn = document.getElementById('logout-btn');       

// Verifica se o usuário está logado (token no localStorage)
// Se não estiver, redireciona para a tela de login
if (!localStorage.getItem('token')) {
  window.location.href = 'index.html';
}

// Evento de clique no botão "Sair"
logoutBtn.addEventListener('click', () => {
  localStorage.clear();                 
  window.location.href = 'index.html'; 
});

// Atualiza o contador de caracteres conforme o usuário digita no textarea
postContent.addEventListener('input', () => {
  renderCharCount(postContent.value.length); 
});

// Evento de envio do formulário de nova postagem
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const content = postContent.value.trim(); // Remove espaços do conteúdo digitado

  if (content.length === 0 || content.length > 280) {
    alert('Postagem deve ter entre 1 e 280 caracteres.');
    return;
  }

  try {
    await postRepo.createPost(content);
    postContent.value = '';             
    renderCharCount(0);                 
    loadPosts();                       
  } catch (error) {
    alert(error.message);
  }
});

// Função para carregar as postagens do usuário
async function loadPosts() {
  try {
    const posts = await postRepo.getMyPosts();
    renderPosts(posts, loadPosts);           
  } catch (error) {
    alert(error.message); 
  }
}

// Carrega as postagens quando a página for aberta
loadPosts();