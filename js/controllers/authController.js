import * as authRepo from '../repositories/authRepository.js';
import { renderLoginError, renderRegisterError } from '../views/authView.js';

// Obtém referências às seções de login e registro no HTML
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

// Quando o botão "Registre-se" for clicado
document.getElementById('show-register').addEventListener('click', () => {
  loginSection.classList.add('hidden');         // Esconde a seção de login
  registerSection.classList.remove('hidden');   // Exibe a seção de registro
  renderLoginError('');                         // Limpa mensagens de erro de login
});

// Quando o botão "Faça login" for clicado
document.getElementById('show-login').addEventListener('click', () => {
  registerSection.classList.add('hidden');      
  loginSection.classList.remove('hidden');     
  renderRegisterError('');                      
});

// Evento de envio do formulário de login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault(); 

  // Obtém e limpa os valores dos campos
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  try {
    const data = await authRepo.login({ email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    window.location.href = 'feed.html';
  } catch (error) {
    if (
      error.message.toLowerCase().includes('inválido') ||
      error.message.toLowerCase().includes('não existe') ||
      error.message.toLowerCase().includes('invalid')
    ) {
      renderLoginError('Essa conta não existe');
    } else {
      renderLoginError(error.message);
    }
  }
});

// Evento de envio do formulário de registro
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault(); 

  // Obtém e limpa os valores dos campos
  const username = e.target.username.value.trim();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  try {
    const data = await authRepo.register({ username, email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    window.location.href = 'feed.html';
  } catch (error) {
    renderRegisterError(error.message);
  }
});