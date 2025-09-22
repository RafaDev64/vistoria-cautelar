//Script para chat: agendamento.html
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    const perguntas = [
      "Olá! Para agendar sua vistoria, por favor, informe seu nome:",
      "Ótimo, {{nome}}! Agora, qual data você prefere para a vistoria? (ex: 25/09/2025)",
      "Perfeito! Qual horário seria melhor para você?",
      "Por fim, qual é o seu telefone para contato?",
      "Obrigado! Seu agendamento foi registrado. Nossa equipe entrará em contato para confirmar. ✅"
    ];

    let etapa = 0;
    let dados = {};

    function adicionarMensagem(texto, classe = "bot") {
      const msg = document.createElement("div");
      msg.style.margin = "0.5rem 0";
      msg.style.padding = "0.5rem 0.75rem";
      msg.style.borderRadius = "0.5rem";
      msg.style.maxWidth = "80%";
      msg.style.wordBreak = "break-word";
      msg.style.backgroundColor = classe === "bot" ? "#f3f4f6" : "#2563eb";
      msg.style.color = classe === "bot" ? "#333" : "white";
      msg.style.alignSelf = classe === "bot" ? "flex-start" : "flex-end";
      msg.textContent = texto;
      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function enviarResposta() {
      const resposta = chatInput.value.trim();
      if (!resposta) return;

      adicionarMensagem(resposta, "user");
      chatInput.value = "";

      if (etapa === 0) dados.nome = resposta;
      if (etapa === 1) dados.data = resposta;
      if (etapa === 2) dados.horario = resposta;
      if (etapa === 3) dados.telefone = resposta;

      etapa++;

      setTimeout(() => {
        if (etapa < perguntas.length) {
          let textoPergunta = perguntas[etapa];
          if (etapa === 1) textoPergunta = textoPergunta.replace("{{nome}}", dados.nome);
          adicionarMensagem(textoPergunta, "bot");
        }
      }, 500);
    }

    adicionarMensagem(perguntas[0]);

    chatSend.addEventListener("click", enviarResposta);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") enviarResposta();
    });
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

    
