export function renderProfileForm(user) {

  const usernameInput = document.getElementById('profile-username');
  const emailInput = document.getElementById('profile-email');

  if (usernameInput && emailInput) {
    usernameInput.value = user.username;
    emailInput.value = user.email;
  }
}

// Renderiza a lista de postagens do usuário na página de perfil
export function renderUserPosts(posts, reloadCallback) {

  const userPostsList = document.getElementById('user-posts-list');
  userPostsList.innerHTML = '';

  // Ordena as postagens da mais recente para a mais antiga
  posts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((post) => {

      const postEl = document.createElement('article');
      postEl.classList.add('post-item');
      postEl.innerHTML = `
        <div class="post-header">
          ${post.author.username}
          <span class="post-date">${new Date(post.createdAt).toLocaleString()}</span>
        </div>
        <div class="post-content">${post.content}</div>
        <button class="delete-post" data-id="${post._id}">Deletar</button>
      `;

      userPostsList.appendChild(postEl);

      // Adiciona evento de clique no botão deletar para remover a postagem
      postEl.querySelector('.delete-post').addEventListener('click', async () => {

        if (confirm('Deseja deletar essa postagem?')) {
          try {
            const { deletePost } = await import('../repositories/postRepository.js');
            await deletePost(post._id);
            reloadCallback();
          } catch (error) {
            alert(error.message);
          }
        }
      });
    });
}