function calcularTotal() {
    let total = 0;
    document.querySelectorAll('.item').forEach(function(item) {
        const preco = parseFloat(item.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
        const quantidade = parseInt(item.querySelector('.quantity').value);
        total += preco * quantidade;
    });
    document.getElementById('total').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    return total;
}

// Adicionando event listener para cada input
document.querySelectorAll('.quantity').forEach(function(item) {
    item.addEventListener('input', function() {
        calcularTotal();
    });
});

// Calculando o total inicial ao carregar a página
calcularTotal();

// Função para armazenar os itens comprados no sessionStorage
function armazenarItensComprados() {
    const itensComprados = [];
    document.querySelectorAll('.item').forEach(function(item) {
        const nome = item.querySelector('.item-title').textContent;
        const preco = parseFloat(item.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
        const quantidade = parseInt(item.querySelector('.quantity').value);
        if (quantidade > 0) {
            itensComprados.push({
                nome: nome,
                preco: preco,
                quantidade: quantidade
            });
        }
    });
    sessionStorage.setItem('itensComprados', JSON.stringify(itensComprados));
}

// Adicionando event listener para o botão de confirmação
document.getElementById('confirm-button').addEventListener('click', function() {
    armazenarItensComprados();
    sessionStorage.setItem('totalFoodsDrinks',calcularTotal())
    window.location.href = "payment.html";
});
