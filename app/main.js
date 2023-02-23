let livros = [];

const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch (endPointDaAPI);
    const livros = await res.json();
    console.table(livros);
    exibirLivrosNaTela(livros);
}
