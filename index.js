var cpf = "111.444.777-05".replace(/[^\d]/g, "");
var arrayCbf =Array.from(cpf, (x) => parseInt(x))

var sum = 0
for(let i= 0;i < 9; i++){
  sum += arrayCbf[i] * (10-i)
}
var t = (sum*10)%11
console.log(sum)
