
let amigos = []

function adicionarAmigo() {
  let inputNome = document.getElementById('amigo');
  let nomeAmigo = inputNome.value.trim();

  if (nomeAmigo == '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nomeAmigo);

  atualizarLista();

  inputNome.value = '';
}

function atualizarLista() {
  let listaAmigos = document.getElementById('listaAmigos');

  listaAmigos.innerHTML = '';

  for (let amigo of amigos) {
    let item = document.createElement('li');
    item.textContent = amigo;

    listaAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}