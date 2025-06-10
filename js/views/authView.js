// Função para mostrar mensagem de erro na área de login
export function renderLoginError(message) {
  // Seleciona o elemento que exibe o erro no login pelo ID
  const errorEl = document.getElementById('login-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = message ? 'block' : 'none';
  }
}

// Função para mostrar mensagem de erro na área de registro
export function renderRegisterError(message) {
  // Seleciona o elemento que exibe o erro no registro pelo ID
  const errorEl = document.getElementById('register-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = message ? 'block' : 'none';
  }
}