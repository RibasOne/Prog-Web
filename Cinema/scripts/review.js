let selectedMovie = JSON.parse(sessionStorage.getItem("selectedMovie"));
let selectedSeats = JSON.parse(sessionStorage.getItem("selectedSeats"));
let ticketsPrice = sessionStorage.getItem("ticketsPrice");

let movie = document.getElementById("selected-movie");
let seats = document.getElementById("selected-seats");
let price = document.getElementById("tickets-price");

movie.textContent = selectedMovie.title;
seats.textContent = selectedSeats;
price.textContent = "R$" + ticketsPrice + ",00";

function adicionarItemTabela() {
    let total = 0;
  let itens = JSON.parse(sessionStorage.getItem("itensComprados"));
  var corpoTabela = document.querySelector("#tabelaItens tbody");
  if (itens.length > 0) {
    itens.forEach((item) => {
        var novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>R$${item.preco},00</td>
            <td>R$${item.preco * item.quantidade},00</td>
        `;
        corpoTabela.appendChild(novaLinha);
        total += item.preco * item.quantidade;
      });
  }
  else{
    document.getElementById('tabelaItens').style.display = "none";
  }
  total += parseInt(ticketsPrice);
  document.getElementById('total-price').textContent = 'R$ ' + total + ",00";
}

document.getElementById('confirm-button').addEventListener('click', function() {
    window.location.href = "../views/home.html";
    alert('Pedido confirmado!');
    sessionStorage.clear();
});

adicionarItemTabela();
