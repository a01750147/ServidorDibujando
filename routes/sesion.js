const express = require('express'); 
const iniciarSesionController = require('../controllers/sesion');

// Mini app 
const router = express.Router();

//menu principal
//router.get('/IniciarSesion', iniciarSesionController.getIniciarSesion);
router.post('/BuscarUsuario', iniciarSesionController.postBuscarUsuario);

//router.get('/exito', iniciarSesionController.getSesionExitosa);

module.exports = router; 