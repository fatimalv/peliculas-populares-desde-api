let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
    pagina += 1;
    cargarPeliculas();
}
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
    pagina -= 1;
    cargarPeliculas();
}
});
const cargarPeliculas = async()=>{

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=428a6077b613d0e2c39d91c84d93133b&language=es-MX&page=${pagina}`)
     console.log(respuesta);

     if(respuesta.status === 200){
             const datos = await respuesta.json();
             
             let peliculas= '';
             datos.results.forEach(pelicula => {
                peliculas += `
                <div class= "pelicula"> 
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class"titulo">${pelicula.title}</h3></div>`;
                
             });

             document.getElementById('contenedor').innerHTML = peliculas;








    }else if(respuesta.status === 401){
            console.log('llave erronea');
    }else if(respuesta.status === 404){
            console.log('la pelicula no se encuentra en esta base de datos');} }
 catch(error){
    console.log(error);
}
}
cargarPeliculas();