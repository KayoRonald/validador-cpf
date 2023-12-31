import verificCPF from './cpfVerific.js'
import conffetis from './conffetis.js'
document.getElementById("click").addEventListener("click", () => {
  var valor = document.getElementById("cpf").value
  var cpf = valor.trim().replace(/[^\d]/g, "");
  var arrayCPF = Array.from(cpf, (x) => parseInt(x))
  if (cpf.length != 11) {
    Swal.fire({
      icon: 'error',
      title: 'Ops',
      text: `Esse CPF é inválido!`
    })
    return 0;
  }
  const isValid = verificCPF(arrayCPF, cpf)
  let cpfFormating = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  if (isValid) {
    conffetis()
    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: `Esse CPF: ${cpfFormating} é válido`
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Ops',
      text: `Esse CPF: ${cpfFormating} é inválido`
    })
  }
})