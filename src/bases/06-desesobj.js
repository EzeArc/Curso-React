const persona = {
    nombre: 'Tony',
    edad: 28,
    clave: 'Ironman',
    rango: 'soldado', //si la propiedad no tiene valor, se le asigna la de  la función
};

//const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango ='capitan'}) => { //establecemos el rango por defecto (aunque la propiedad no la tenga)
  //  console.log(nombre,edad,rango)
return {
    nombreClave: clave,
    anios: edad,
    latlong: {
        lat: 12345,
        lng: -12.32,
    }
}
}
const avenger= retornaPersona(persona);
console.log(avenger);

const {nombreClave, anios, latlong: {lat,lng}} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat,lng);