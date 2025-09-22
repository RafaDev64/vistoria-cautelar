//Script para alterar fundo
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      themeToggle.textContent = '☀️';
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark-theme');
      themeToggle.textContent = '☀️';
    }

    // Alterna o tema ao clicar
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    