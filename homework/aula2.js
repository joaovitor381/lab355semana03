function classificaIdade(idade) {
  if (idade < 0 || idade > 110) {
    return "Idade inválida";
  } else if (idade <= 12) {
    return "Criança";
  } else if (idade <= 17) {
    return "Adolescente";
  } else if (idade <= 65) {
    return "Adulto";
  } else {
    return "Sênior";
  }
}

console.log(classificaIdade(10));
console.log(classificaIdade(16));
console.log(classificaIdade(30));
console.log(classificaIdade(70));
console.log(classificaIdade(-5));
console.log(classificaIdade(120));
