class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro (livro) {
    this.livros.push(livro);
  }
}

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

class Simulador {
  constructor() {
    this.biblioteca = new Biblioteca();
  }

  adicionarLivro (titulo, autor) {
    let livro = new Livro(titulo, autor);
    this.biblioteca.adicionarLivro(livro);
  }
}

let simulador = new Simulador();

document.getElementById('adicionar').addEventListener('click', function (event) {
  event.preventDefault();
  let titulo = document.getElementById('title').value;
  let autor = document.getElementById('author').value;
  simulador.adicionarLivro(titulo, autor);

  let li = document.createElement('li');
  li.textContent = titulo + ' - ' + autor;
  document.getElementById('livros').appendChild(li);
});