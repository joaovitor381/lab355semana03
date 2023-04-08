function classificaPedido(valor) {
  if (valor <= 10000) {
    return "Bronze";
  } else if (valor <= 50000) {
    return "Prata";
  } else if (valor <= 500000) {
    return "Ouro";
  } else {
    return "Platinum";
  }
}

console.log(classificaPedido(5000)); // Bronze
console.log(classificaPedido(15000)); // Prata
console.log(classificaPedido(150000)); // Ouro
console.log(classificaPedido(1000000)); // Platinum
