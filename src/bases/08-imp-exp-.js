//import {heroes} from './data/heroes';
//impor {heroes,owners} from './data/heroes';
import heroes, {owners} from '../data/heroes'; //exportación por defecto (le asignamos el nombre nosotros)
const getHeroesById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}//funcion callback dentro del return

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
//función exactamente igual a la anterior

console.log(getHeroesById(2));
console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
console.log(owners);