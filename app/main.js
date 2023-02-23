let livros = [];

const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaApi();

const elementoParaInserirLivros = document.getElementById('livros');


async function getBuscarLivrosDaApi() {
    const res = await fetch (endPointDaAPI);
    const livros = await res.json();
    console.table(livros);
    exibirLivrosNaTela(livros);
}


function exibirLivrosNaTela (listaDeLivros){
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `

        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        `
    })
}

