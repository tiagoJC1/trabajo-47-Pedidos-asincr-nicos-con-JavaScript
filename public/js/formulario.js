const urlPath = window.location.pathname;
const id = urlPath.split("/").pop();

window.onload = (req, res) => {
    let titleInput = document.getElementById("title");
    let ratingInput = document.getElementById("rating");
    let awardsInput = document.getElementById("awards");
    let releaseDateInput = document.getElementById("release_date");
    let lengthInput = document.getElementById("length");
    let form = document.getElementById("form");

    let buttomCreate = document.getElementById("boton-agregar");
    let buttomEdit = document.getElementById("boton-editar");
    let buttomDelete = document.getElementById("boton-eliminar");

    // const urlPath = window.location.pathname;
    // const id = urlPath.split("/").pop();




    fetch(`http://localhost:3031/api/movies/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (peliculas) {
            console.log(peliculas.data)
            let data = peliculas.data;

            titleInput.value = data.title;
            ratingInput.value = data.rating;
            awardsInput.value = data.awards;
            releaseDateInput.value = data.release_date;
            lengthInput.value = data.length;
        });

    // console.log(form.action)

    if (id > 0) {
        // form.action = `/api/movies/update/${id}`;
        // form.method = "PUT";
        buttomCreate.style.display = "none";
    } else {
        // form.action = `/api/movies/create`;
        // form.method = "POST";
        buttomEdit.style.display = "none";
        buttomDelete.style.display = "none";
    }
    console.log(id)
}




async function create(esto_esta_asi_porque_quiero){

    let data = {
        title: document.getElementById("title").value,
        rating: document.getElementById("rating").value,
        awards: document.getElementById("awards").value,
        release_date: document.getElementById("release_date").value,
        length: document.getElementById("length").value,
    }

    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "a6f3a3e6-8f8e-4b6d-9a6a-0a9c6a9c6a9c"
        },
        body: JSON.stringify(data)
    }
    fetch(`http://localhost:3031/api/movies/create`, config)
        .then(function (response) {
            return response.json()
        })
        .then(function (peliculas) {
            // console.log(peliculas)
            console.log(peliculas.data)
            redirect("/")
            // alert("Pelicula agregada")
        })
        .catch(error => {
            console.error('Error:', error);
        });

}

const edit = (e) => {
    // e.preventDefault();

    let data = {
        title: document.getElementById("title").value,
        rating: document.getElementById("rating").value,
        awards: document.getElementById("awards").value,
        release_date: document.getElementById("release_date").value,
        length: document.getElementById("length").value,
    }

    let config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "a6f3a3e6-8f8e-4b6d-9a6a-0a9c6a9c6a9c"
        },
        body: JSON.stringify(data)
    }
    fetch(`http://localhost:3031/api/movies/update/${id}`, config)
        .then(function (response) {
            return response.json()
        })
        .then(function (peliculas) {
            console.log(peliculas.data)
            redirect("/formulario/" + id)
            // alert("Pelicula agregada")
        })
}


const destroy = () => {
    // const urlPath = window.location.pathname;
    // const id = urlPath.split("/").pop();

    fetch(`http://localhost:3031/api/movies/delete/` + id)
        .then(function (response) {
            return response.json()
        })
        .then(function (peliculas) {
            console.log(peliculas.data)
            // redirect("/")
            // alert("Pelicula agregada")
        })
}

