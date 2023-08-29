document.getElementById("click").addEventListener("click", () => {
  var valor = document.getElementById("cpf").value
  var cpf = valor.trim().replace(/[^\d]/g, "");
  var arrayCbf = Array.from(cpf, (x) => parseInt(x))

  let base = cpf.slice(0, 9);
  console.log(base)
  function PrimeiroValor(arrayCbf) {
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += arrayCbf[i] * (10 - i)
    }
    const resto = sum % 11
    let digite1 = resto < 2 ? 0 : 11 - resto;
    base += digite1
  }
  function SegundoValor(arrayCbf) {
    let sum = 0
    for (let i = 0; i < 10; i++) {
      sum += base[i] * (11 - i)
    }
    const resto = sum % 11
    let digite2 = resto < 2 ? 0 : 11 - resto;
    base += digite2
  }
  const teste = PrimeiroValor(arrayCbf)
  const teste1 = SegundoValor(arrayCbf)
  if (base == cpf) {
    Swal.fire({icon: 'success', title: 'Sucesso!',  text: 'Esse CPF é valido'})
  } else {
    Swal.fire({icon: 'error', title: 'Ops', text: 'Esse CPF é inválido'})
  }
})