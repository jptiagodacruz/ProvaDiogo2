

# 🐦 Mini Twitter

Uma versão simplificada do Twitter desenvolvida com **HTML**, **CSS** e **JavaScript vanilla**, utilizando uma API REST para autenticação e postagens.

## 🚀 Funcionalidades

- Registro e login de usuários
- Autenticação com JWT
- Criação de postagens (limite de 280 caracteres)
- Visualização de feed de postagens
- Perfil com edição de dados e listagem de postagens do usuário
- Responsivo (Mobile First)
- Armazenamento local do token de autenticação (`localStorage`)

---

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Flexbox e Grid)
- JavaScript ES6+
- API REST pública
- LocalStorage
- Live Server para execução local

---

## 📂 Estrutura de Pastas

mini-twitter/
├── index.html # Tela de login e registro
├── feed.html # Página principal com o feed de postagens
├── profile.html # Página de perfil do usuário
├── css/
│ ├── reset.css # Reset básico
│ └── style.css # Estilos principais do projeto
├── js/
│ ├── controllers/ # Controladores de lógica (auth, feed, profile)
│ ├── repositories/ # Comunicação com a API (fetch)
│ └── views/ # Manipulação visual do DOM
└── assets/
└── images/ # (Opcional) Imagens do projeto

---

## 🌐 API Utilizada

- **URL base da API**:  
  `https://mini-twitter-api-vy9q.onrender.com`

- **Endpoints disponíveis**:
  - `/api/auth/register` – Criar usuário
  - `/api/auth/login` – Autenticar
  - `/api/posts` – Criar post / Listar posts
  - `/api/posts/my-posts` – Listar posts do usuário
  - `/api/posts/:id` – Deletar post
  - `/api/users/profile` – Ver/editar perfil do usuário

---

## ▶️ Como Executar Localmente

### Pré-requisitos

- Navegador moderno (Google Chrome, Firefox, Edge etc.)
- Extensão do **Live Server** instalada no VSCode ou outro servidor local

### Passos

1. Clone o repositório:
   ```bash
   git clone:https://github.com/jptiagodacruz/ProvaDiogo2.git

