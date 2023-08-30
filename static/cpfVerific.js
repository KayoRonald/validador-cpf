const verificCPF = (arrayCPF, cpf) => {
  let base = cpf.slice(0, 9);
  let sum1 = 0
  for (let i = 0; i < 9; i++) {
    sum1 += arrayCPF[i] * (10 - i)
  }
  const resto1 = sum1 % 11
  let digite1 = resto1 < 2 ? 0 : 11 - resto1;
  base += digite1
  // Verificando segundo valor
  let sum2 = 0
  for (let i = 0; i < 10; i++) {
    sum2 += base[i] * (11 - i)
  }
  const resto2 = sum2 % 11
  let digite2 = resto2 < 2 ? 0 : 11 - resto2;
  base += digite2
  return cpf == base ? true : false
}

export default verificCPF 