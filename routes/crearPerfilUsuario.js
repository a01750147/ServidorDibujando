const express = require('express'); 
const UsuarioController = require('../controllers/crearPerfilUsuario');

// Mini app 
const router = express.Router()

//crear perfil
router.post('/PerfilUsuario',UsuarioController.perfilUsuario);

//EnviarDonaciones
router.post('/EnviarDonaciones',UsuarioController.perfilDonaciones);


module.exports = router; 