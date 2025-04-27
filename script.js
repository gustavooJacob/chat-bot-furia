document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
  
    // Sons
    const sons = [
      'sounds/go_go_go.mp3',
      'sounds/rush_b.mp3',
      'sounds/lets_go.mp3',
      'sounds/fire_in_the_hole.mp3',
      'sounds/affirmative.mp3'
    ];
  
    // Palavras-chave e respostas específicas
    const respostasEspecificas = [
      { palavra: "furia", resposta: "A FURIA é o melhor time, né? 🐺🔥" },
      { palavra: "cs", resposta: "Counter-Strike é a nossa casa! 🎯" },
      { palavra: "jogo", resposta: "Preparado pra mais uma vitória? 🚀" },
      { palavra: "awp", resposta: "Sniper na mão, perigo na certa! 🔫" },
      { palavra: "rush", resposta: "RUSH B SEM PARAR!!! 🐾🔥" },
      { palavra: "torcida", resposta: "Nossa torcida é INCRÍVEL! 💥" },
      { palavra: "eco", resposta: "Eco? Compra só pistola e confia! 😂" },
      { palavra: "bala", resposta: "Bala na cabeça é a call! 🎯" },
      { palavra: "campeonato", resposta: "Vamos buscar esse título! 🏆" },
      { palavra: "fã", resposta: "A FURIA tem a torcida mais braba! 🐺" }
    ];
  
    // Resposta padrão se não encontrar nenhuma palavra-chave
    const respostaPadrao = "Confia na call, que é sucesso! 🚀";
  
    // Função para adicionar mensagem
    function adicionarMensagem(texto, classe) {
      const div = document.createElement('div');
      div.classList.add('message', classe);
      div.textContent = texto;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  
    // Função para tocar som aleatório
    function tocarSom() {
      const somEscolhido = sons[Math.floor(Math.random() * sons.length)];
      const audio = new Audio(somEscolhido);
      audio.volume = 0.5;
      audio.play();
    }
  
    // Função para gerar resposta baseada no que o usuário escreveu
    function gerarResposta(mensagemUsuario) {
      const mensagem = mensagemUsuario.toLowerCase();
      for (const item of respostasEspecificas) {
        if (mensagem.includes(item.palavra)) {
          return item.resposta;
        }
      }
      return respostaPadrao;
    }
  
    // Quando o usuário enviar
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mensagem = chatInput.value.trim();
  
      if (mensagem !== '') {
        adicionarMensagem(mensagem, 'user');
        chatInput.value = '';
  
        setTimeout(() => {
          const resposta = gerarResposta(mensagem);
          adicionarMensagem(resposta, 'bot');
          tocarSom();
        }, 600);
      }
    });
  });
  