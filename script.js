// Seleciona o botão de troca de tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Ouve o evento de clique para alternar a classe .dark-mode no body
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Atualiza o texto do botão conforme o tema ativo
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Modo Claro';
  } else {
    themeToggleBtn.textContent = '🌙 Modo Escuro';
  }
});
const themeToggleBtn = document.getElementById('theme-toggle');

// Função para atualizar o texto do botão conforme a classe do body
function updateButtonText() {
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Modo Claro';
  } else {
    themeToggleBtn.textContent = '🌙 Modo Escuro';
  }
}

// Carrega a preferência salva no navegador do usuário
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}
updateButtonText();

// Evento de clique para mudar o tema e persistir no localStorage entre as páginas
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  updateButtonText();
});
