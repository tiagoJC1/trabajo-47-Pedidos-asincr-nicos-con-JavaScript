function favorito(e) {
  // e.preventDefault();
  alert("pelicula añadida a favoritas")

  let data = {
}

let config = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "a6f3a3e6-8f8e-4b6d-9a6a-0a9c6a9c6a9c"
    },
    body: JSON.stringify(data)
}
  fetch(`http://localhost:3031/api/movies/addFavorite/${e}`, config)
    .then(function (response) {
      return response.json()
    })
    .then(function (peliculas) {
      // console.log(peliculas.data)
      // redirect("/formulario/" + id)
      // alert("Pelicula agregada")
    })
  // method: "PUT",

}

function quitarFavorito(e) {
  // e.preventDefault();
  alert("se quito de tus favoritas")

  let data = {
}

let config = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "a6f3a3e6-8f8e-4b6d-9a6a-0a9c6a9c6a9c"
    },
    body: JSON.stringify(data)
}
  fetch(`http://localhost:3031/api/movies/removeFavorite/${e}`, config)
    .then(function (response) {
      return response.json()
    })
    .then(function (peliculas) {
      // console.log(peliculas.data)
      // redirect("/formulario/" + id)
      // alert("Pelicula agregada")
    })
  // method: "PUT",

}

window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);



  // Aqui debemos agregar nuestro fetch
  // alert("Hola")
  // api/movies/:id

  let estrella = ``;

  fetch(`http://localhost:3031/api/movies`)


    .then(function (response) {
      return response.json()
    })
    .then(function (peliculas) {
      console.log(peliculas.data)


      /** Codigo que debemos usar para mostrar los datos en el frontend  */

      // .then(function (peliculas) {

      let data = peliculas.data;

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        const a = document.createElement("p");
        const boton = document.createElement("button");

        // if (movie.favorite == 1) {

        // boton.textContent = "añadir a favoritos";
        // boton.onclick = () => favorito(`${movie.id}`);

        // a.appendChild(boton);

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        // }

        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }


        card.appendChild(duracion);
        // alert(movie.favorite)

        if (movie.favorite === 1) {

          boton.textContent = "quitar de favoritos";
          boton.onclick = () => quitarFavorito(`${movie.id}`);
  
          a.appendChild(boton);
          card.appendChild(a);
          } else {
            boton.textContent = "añadir a favoritos";
            boton.onclick = () => favorito(`${movie.id}`);
    
            a.appendChild(boton);
            card.appendChild(a);
          }
  
        
      });
    })
  // })
};
