const express = require('express'); 
const UsuarioController = require('../controllers/crearCuenta');

// Mini app 
const router = express.Router()

//crear cuenta
router.post('/CrearCuenta',UsuarioController.postAgregarUsuario);
router.post('/CrearCuentaAdmin', UsuarioController.postAgregarAdmin); 

module.exports = router; 