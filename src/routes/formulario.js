const express = require('express');
const router = express.Router();

const formularioController = require('../controllers/formularioController');


//Rutas
router.get('/', formularioController.formulario);

router.get('/:id', formularioController.formulario);

module.exports = router;