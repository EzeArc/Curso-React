//Desastructuración en arreglos --> sirve para poner en variables los valores dentro del array
const personajes= ['Goku', 'Gohan', 'Vegetta', 'piccolo',];

const [ , ,p3] = personajes; //La coma simboliza la posición a omitir
console.log(p3);

const retornaArreglo = () => {
    return ['ABC',123];
}
/* -------------------------------- */
const [letras, numeros]= retornaArreglo();
console.log(letras, numeros);

const usarEstado = (nombre) => {
    return [nombre, () => { console.log('Hola mundo')}]
}

const [nombre, setNombre]= usarEstado('Goku');
//llama a la 2da posicion del array q aloja la función.
console.log(nombre);
setNombre();