// Atualiza o contador de caracteres no campo de postagem
export function renderCharCount(count) {
  // Seleciona o elemento que exibe o contador de caracteres
  const charCount = document.getElementById('char-count');
  if (charCount) {
    charCount.textContent = `${count} / 280`;
  }
}

// Renderiza a lista de postagens na tela
export function renderPosts(posts, reloadCallback) {

  const postsList = document.getElementById('posts-list');
  postsList.innerHTML = '';

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

      // Adiciona a postagem ao container principal
      postsList.appendChild(postEl);

      // Seleciona o botão de deletar dentro da postagem recém criada
      const deleteBtn = postEl.querySelector('.delete-post');
      // Adiciona evento de clique para deletar a postagem
      deleteBtn.addEventListener('click', async () => {
        // Confirma com o usuário se deseja realmente deletar
        if (confirm('Deseja deletar essa postagem?')) {
          try {
            await import('../repositories/postRepository.js')
              .then(module => module.deletePost(post._id));
            reloadCallback();
          } catch (error) {
            alert(error.message);
          }
        }
      });
    });
}