const btnOrdenar = document.getElementById('btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', ordenarLivros);

function ordenarLivros() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    exibirLivros(livrosOrdenados);
}