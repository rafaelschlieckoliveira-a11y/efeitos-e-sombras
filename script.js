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
