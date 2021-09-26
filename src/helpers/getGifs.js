


export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mZDfohu4inQrzo14j3AhBXGvWHqqEk8J`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            //.images?. ? es para evaluar si {data} trae images
        }
    })

    return gifs;
    //Returna una promesa (async)
}

//Sobre la carpeta helpers, aqui se colocan archivos que contienen 
//funciones que hacen cierto trabajo en especifico (que pueden recibir argumentos)
//Estan funciones procesan estos argumentos y retornan un tipo de dato especificado
//No es necesario que modifiquen el state