# Amigo Secreto

## Descrição

Este projeto é uma aplicação web simples que permite aos usuários adicionar nomes de amigos e realizar um sorteio aleatório para descobrir o "amigo secreto". Ele foi desenvolvido com o intuito de aprimorar as habilidades em lógica de programação, manipulação e utilização de HTML, CSS e JavaScript.

## Funcionalidades

- **Adicionar Nomes:** Permite que o usuário insira nomes através de um campo de texto e os adicione a uma lista.
- **Validação de Entrada:** Se o campo de texto estiver vazio, um alerta é exibido com a mensagem "Por favor, insira um nome.".
- **Atualizar a Lista:** Os nomes adicionados são exibidos em uma lista HTML. A lista é limpa (usando `innerHTML = ""`) antes de atualizar para evitar duplicidade e é populada utilizando um loop `for` que cria elementos `<li>` para cada nome.
- **Sorteio Aleatório:** Utiliza `Math.random()` e `Math.floor()` para selecionar aleatoriamente um dos nomes cadastrados e exibi-lo na tela.

## Tecnologias Utilizadas

- **HTML** para estruturar a aplicação.
- **CSS** para estilização e layout.
- **JavaScript** para implementar a lógica de negócio (adição de nomes e sorteio).


## Como Utilizar

1. **Inserir Nomes:** Digite o nome do amigo no campo de entrada e clique no botão **"Adicionar"**.
2. **Visualizar Lista:** Os nomes adicionados serão exibidos na lista abaixo do campo de entrada.
3. **Sortear Amigo:** Após inserir os nomes desejados, clique no botão **"Sortear Amigo"** para realizar o sorteio. O nome sorteado será exibido na tela.

## Considerações

Este projeto foi desenvolvido para fins de estudo e aprimoramento das habilidades de programação. Fique à vontade para modificar e contribuir com melhorias ou novas funcionalidades.
