import * as userRepo from '../repositories/userRepository.js';

// Importa funções da view do perfil (responsável por renderizar formulário e posts)
import { renderProfileForm, renderUserPosts } from '../views/profileView.js';
import { getMyPosts } from '../repositories/postRepository.js';

// Seleciona elementos do DOM usados na página de perfil
const profileForm = document.getElementById('profile-form');         
const usernameInput = document.getElementById('profile-username');   
const emailInput = document.getElementById('profile-email');        
const logoutBtn = document.getElementById('logout-btn');             

// Verifica se o usuário está autenticado (token no localStorage)
// Se não estiver, redireciona para a tela de login
if (!localStorage.getItem('token')) {
  window.location.href = 'index.html';
}

// Evento de clique no botão "Sair"
logoutBtn.addEventListener('click', () => {
  localStorage.clear();                 
  window.location.href = 'index.html'; 
});

// Função para carregar as informações do perfil do usuário
async function loadProfile() {
  try {
    const user = await userRepo.getProfile(); 
    renderProfileForm(user);                  
  } catch (error) {
    alert(error.message);                     
    if (error.message.includes('não autorizado')) {
      localStorage.clear();
      window.location.href = 'index.html';
    }
  }
}

// Evento de envio do formulário de edição de perfil
profileForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 
  // Obtém os valores do formulário
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();

  try {
    await userRepo.updateProfile({ username, email });
    alert('Perfil atualizado com sucesso!');
  } catch (error) {
    alert(error.message);
  }
});

// Função para carregar e exibir as postagens do usuário
async function loadUserPosts() {
  try {
    const posts = await getMyPosts();       
    renderUserPosts(posts, loadUserPosts);           
  } catch (error) {
    alert(error.message); 
  }
}

loadProfile();     
loadUserPosts();   