const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtroLivros));

function filtroLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    secaoDeLivros.innerHTML = '';
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalNaTela(valorTotal) {
    valorTotalDeLivrosDiponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

