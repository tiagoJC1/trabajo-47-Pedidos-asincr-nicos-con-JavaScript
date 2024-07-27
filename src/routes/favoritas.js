const express = require('express');
const router = express.Router();

const favoritasController = require('../controllers/favoritasController');


//Rutas
router.get('/', favoritasController.list);

module.exports = router;