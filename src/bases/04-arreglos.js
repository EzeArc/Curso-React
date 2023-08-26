const arreglo = [1,2,3,4,5];
//operador spread (...) permite copiar el array sin modificarlo y agregar el valor al nuevo array
let arreglo2= [...arreglo, 5];
const arreglo3= arreglo2.map( function (numero) {
  return numero * 2;
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
