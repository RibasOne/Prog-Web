document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var cardNumber = document.getElementById("cardNumber").value.trim();
  var expiryDate = document.getElementById("expiryDate").value.trim();
  var cvv = document.getElementById("cvv").value.trim();

  // Validar número do cartão (deve conter apenas números e ter comprimento entre 12 e 19 dígitos)
  if (!/^\d{12,19}$/.test(cardNumber)) {
    alert("Por favor, insira um número de cartão válido.");
    return;
  }

  // Validar data de validade (deve estar no formato MM/YY e ser uma data futura)
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear() % 100; // Pegar apenas os últimos dois dígitos do ano
  var currentMonth = currentDate.getMonth() + 1; // Meses são indexados a partir de 0, então adicionamos 1
  var [expiryMonth, expiryYear] = expiryDate.split("/");
  expiryMonth = parseInt(expiryMonth, 10);
  expiryYear = parseInt(expiryYear, 10);

  if (
    !/^\d{2}\/\d{2}$/.test(expiryDate) ||
    expiryMonth < 1 ||
    expiryMonth > 12 ||
    expiryYear < currentYear ||
    (expiryYear === currentYear && expiryMonth < currentMonth)
  ) {
    alert("Por favor, insira uma data de validade válida no formato MM/YY.");
    return;
  }

  // Validar CVV (deve conter apenas números e ter comprimento de 3 ou 4 dígitos)
  if (!/^\d{3,4}$/.test(cvv)) {
    alert("Por favor, insira um CVV válido.");
    return;
  }

  // Se todas as validações passarem, o formulário pode ser enviado
  alert("Pagamento confirmado!");

  sessionStorage.setItem("numeroCartao", JSON.stringify(cardNumber));
  sessionStorage.setItem("dataValidade", JSON.stringify(expiryDate));
  sessionStorage.setItem("cvv", JSON.stringify(cvv));
  window.location.href = "review.html";
});
