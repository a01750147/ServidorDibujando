const express = require('express'); 
const UsuarioController = require('../controllers/configuraciones');

// Mini app 
const router = express.Router()

//crear perfil
router.post('/BorrarCuenta',UsuarioController.BorrarCuenta);

module.exports = router; 