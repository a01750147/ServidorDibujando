const express = require('express'); 
const UsuarioController = require('../controllers/crearCuenta');

// Mini app 
const router = express.Router()

//crear cuenta
router.post('/CrearCuenta',UsuarioController.postAgregarUsuario);

router.post('/VerUsuario',UsuarioController.postVerUsuario);

module.exports = router; 