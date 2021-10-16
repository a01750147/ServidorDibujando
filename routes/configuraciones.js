const express = require('express'); 
const UsuarioController = require('../controllers/configuraciones');

// Mini app 
const router = express.Router()

//Borrar Cuenta
router.post('/BorrarCuenta',UsuarioController.BorrarCuenta);

//Cambiar el nombre del usuario
router.post('/EditarNombre',UsuarioController.EditarNombre);

//Cambiar la contraseña del usuario
router.post('/EditarContrasena',UsuarioController.EditarContrasena);

module.exports = router; 