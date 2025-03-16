// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nome = inputAmigo.value.trim();

  // Validação: se o campo estiver vazio, exibe alerta com a mensagem especificada
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array e atualiza a lista exibida
  amigos.push(nome);
  atualizarLista();
  inputAmigo.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a visualização da lista de amigos usando um loop for
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  // Percorre o array de amigos com um loop for e cria elementos <li> para cada nome
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Verifica se há amigos na lista
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para sortear!");
    return;
  }
  
  // Gera um índice aleatório usando Math.random() e Math.floor()
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  // Exibe o resultado no elemento designado, atualizando seu innerHTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

