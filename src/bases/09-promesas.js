import { getHeroeById } from "./08-imp-exp-.js";

// const promesa = new Promise( (resolve, reject) => {
    
//     setTimeout ( () => {
//        // resolve(); //peticiones a end point de una api
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//        //reject('no se pudo encontrar el héroe');
//     }, 2000)

// });

// promesa.then( (heroe)=> {
//     console.log('heroe', heroe) //la recibe aca
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
    
        setTimeout ( () => {
           // resolve(); //peticiones a end point de una api
           const heroe = getHeroeById(id);
           if (heroe) {
               resolve(heroe);
           }else{
              reject('No se pudo encontrar el héroe');
           }
        }, 2000)
    
    });
}

getHeroeByIdAsync(3)
.then( heroe => console.log);
//.catch( console.warn);