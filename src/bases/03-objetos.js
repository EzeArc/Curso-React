const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
      ciudad: "New york",
      zip: 5555,
      lat: 14.32,
      lng: 34.54,
    },
  };
  
  console.log({ persona });
  //console.table(persona);
  
  //opereador spread //clona el objeto "..." + objeto
  const persona2= {...persona};
  persona2.nombre = 'peter';
  
  console.log(persona);
  console.log(persona2);