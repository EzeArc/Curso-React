//export default [ // expor por defecto (recomendación hacer como linea 31↓)

const heroes = [ //exportación tipica
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//export default heroes;
/*export*/ const owners = ['DC', 'Marvel'];

//otra forma de importar
export {
    heroes as default,
    owners,
}