const express = require('express');
const router = express.Router();
const favoriteAPIController = require('../../controllers/api/favoriteApiController');

//Rutas
//Listado de todos los generos
router.get('/', favoriteAPIController.list);
//Detalle del genero
// router.get('/:id', genresAPIController.detail);
//Películas por genero
// router.get('/:id/movies', genresAPIController.genreMovies);

module.exports = router;