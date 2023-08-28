document.getElementById("click").addEventListener("click", () => {
  var valor = document.getElementById("cpf").value
  var cpf = valor.trim().replace(/[^\d]/g, "");
  var arrayCbf = Array.from(cpf, (x) => parseInt(x))

  var sum = 0
  for (let i = 0; i < 9; i++) {
    sum += arrayCbf[i] * (10 - i)
  }
  var resto = sum % 11
  Swal.fire(String(resto))
})
