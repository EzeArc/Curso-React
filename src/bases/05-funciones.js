
const saludar= function (nombre) {
  return `Hola, ${nombre}`;  
}

const saludar2= (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar('Tito'))
console.log(saludar2('Goku'))
console.log(saludar3('vegeta'))


/* ejemplo funcion en react */

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tito_Rober'
  });

  console.log(getUser());

  function getUsearioActivo (nombre){
    return{
      uid: 'ABC123',
      username: nombre
    }
  };
  const usuarioActivo= getUsearioActivo('Ezequiel');
  console.log(usuarioActivo);


  const getUsearioActivo1 = (nombre) =>({
      uid: 'ABC123',
      username: nombre
    });

  const usuarioActivo1 = getUsearioActivo1('eze')
  console.log(usuarioActivo1);