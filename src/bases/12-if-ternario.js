const activo = true;

const mensaje = (activo) ? 'activo' : 'inactivo';

const mensaje1 = activo && 'Activo'; //if ternario si solo quiero mostrar un resultado
console.log(mensaje);
console.log(mensaje1);