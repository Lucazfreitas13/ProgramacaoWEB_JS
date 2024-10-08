function alternarTema() {
  let body = document.body;
  //Verificar se o body da pagina tem um classe especifica do css
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme"); //remove o tema
    body.classList.add("light-theme"); //adicionar um novo tema
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
}
let titulo = document.getElementById("logo");
var cores = ["red", "blue", "green", "purple", "orange", "yellow"];
indiceCor = 0;

function mudarCorTitulo() {
  titulo.style.color = cores[indiceCor];

  indiceCor++;
  if (indiceCor >= cores.length) {
    indiceCor = 0; // reiniciar o indice de cores
  }
}

function mostrarEsconderSecoes() {
  var secoes = document.getElementsByClassName("caixa");
  for (var i = 0; i < secoes.length; i++) {
    //estrutura de decisao que vai verificar a visibilidade das secoes
    if (secoes[i].style.display === "none") {
      secoes[i].style.display = "block";
    } else {
      secoes[i].style.display = "none";
    }
  }
}

var novosLinks = ["Serviços", "Blog", "Ajuda"]; //array com itens do m
var indiceLink = 0;
function adicionarItemNav() {
  var nav = document.querySelector("nav ul");
  if (indiceLink < novosLinks.length) {
    //Criar o novo elemento li
    var novoItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#";
    link.textContent = novosLinks[indiceLink];
    novoItem.appendChild(link);
    nav.appendChild(novoItem);
    indiceLink++;
  } else {
    alert("Todos os itens já foram inseridos!");
  }
}
function alterarImagem() {
  let imagem = document.querySelector("img");
  //array de imagens
  let imagens = ["images/img.jpg", "images/img2.jpg"];
  //Quebrando a URL da imagem para obter somente o nome
  let imagemAtual = imagem.src.split("/").pop();
  let indiceAtual = imagens.findIndex((src) => src.includes(imagemAtual));
  let proximoIndice = (indiceAtual + 1) % imagens.length;
  //troca
  imagem.src = imagens[proximoIndice];
}
function alterarTexto() {
  let titulo = document.querySelector("article.caixa h2");
  if (titulo.textContent === "QUEM SOMOS NÓS?") {
    titulo.textContent = "Alterei aqui!!";
  } else {
    titulo.textContent = "QUEM SOMOS NÓS?";
  }
}

function alterarTexto2() {
  let titulo = document.querySelector("article.caixa h2");
  titulo.textContent = "ALTEREI PARA SEMPRE!!";
}
