function verificaSenha(senha) {
  if (senha === "1234") {
    return "ACESSO PERMITIDO";
  } else {
    return "ACESSO NEGADO";
  }
}

console.log(verificaSenha("1234")); // ACESSO PERMITIDO
console.log(verificaSenha("senha")); // ACESSO NEGADO
