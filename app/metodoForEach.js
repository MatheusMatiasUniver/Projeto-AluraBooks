const secaoDeLivros = document.getElementById('livros');
const valorTotalDeLivrosDiponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivros(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        valorTotalDeLivrosDiponiveis.innerHTML = '';
        let livroDisponivel = livro.quantidade > 0 ? 'disponivel' : 'indisponivel';
                
        secaoDeLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens ${livroDisponivel}" src="${livro.imagem}"
                alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>`;
    });
}