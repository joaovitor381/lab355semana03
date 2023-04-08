function verificaPonte(peso, comprimento) {
  if (peso <= 1500 && comprimento <= 5) {
    return "O carro pode passar pela ponte.";
  } else {
    return "O carro não pode passar pela ponte.";
  }
}

console.log(verificaPonte(1180, 3.5)); // O carro pode passar pela ponte
console.log(verificaPonte(1600, 7)); // O carro não pode passar pela ponte
