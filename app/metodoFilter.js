const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtroLivros));

function filtroLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    secaoDeLivros.innerHTML = '';
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);

    if (categoria == 'disponivel') {
        exibirValorTotalNaTela();
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalNaTela() {
    valorTotalDeLivrosDiponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}

