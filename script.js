function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage(message, "user");
  input.value = "";

  showTypingIndicator();

  setTimeout(() => {
    const botReply = generateResponse(message);
    removeTypingIndicator();
    appendMessage(botReply, "bot");
  }, 1000);
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const msgElement = document.createElement("div");
  msgElement.className = `message ${sender}`;
  msgElement.innerText = message;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
  const chatBox = document.getElementById("chat-box");
  const typing = document.createElement("div");
  typing.className = "message bot typing";
  typing.innerText = "Digitando...";
  typing.id = "typing-indicator";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById("typing-indicator");
  if (typing) typing.remove();
}

function generateResponse(msg) {
  const message = msg.toLowerCase();

  if (message.includes("furia") || message.includes("quem é") || message.includes("história")) {
    return "A FURIA é uma organização brasileira de esports conhecida mundialmente, especialmente no CS:GO!";
  }

  if (message.includes("jogadores") || message.includes("elenco") || message.includes("time atual")) {
    return "O time atual de CS da FURIA conta com grandes nomes! Dá uma olhada no nosso site oficial para ver a lineup atualizada.";
  }

  if (message.includes("último jogo") || message.includes("última partida") || message.includes("resultado")) {
    return "No último jogo, a FURIA deu show! Confira os detalhes no nosso Twitter oficial!";
  }

  if (message.includes("próxima") || message.includes("quando joga") || message.includes("agenda")) {
    return "A próxima partida da FURIA está chegando! Fique ligado no nosso Instagram para não perder nada!";
  }

  if (message.includes("títulos") || message.includes("conquistas") || message.includes("campeonatos")) {
    return "A FURIA já conquistou vários títulos importantes no cenário de CS. Orgulho nacional!";
  }

  if (message.includes("sou fã") || message.includes("amo a furia") || message.includes("torcida") || message.includes("força furia")) {
    return "É isso aí, FURIOSO! A comunidade é o coração da FURIA. Vamos pra cima!";
  }

  if (message.includes("oi") || message.includes("olá") || message.includes("e aí")) {
    return "Oi! Como posso ajudar você hoje? Pergunte algo sobre a FURIA ou nossos jogadores!";
  }

  return "Não entendi muito bem. Tente perguntar sobre jogadores, partidas ou conquistas da FURIA!";
}