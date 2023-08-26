const apiKey= 'SNLXLXWhAADFePYxERWDtcgslSW8tUSI';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then (resp => resp.json() )
.then( ({data}) => { //desestrcuturamos la data para poder acceder a lo q trae la petición
    const {url} = ( data.images.original.url )

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);