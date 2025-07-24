let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getLivrosDaAPI();

async function getLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros);
    
    exibirLivros(livrosComDesconto);
}
