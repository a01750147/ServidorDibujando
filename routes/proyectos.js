const express = require('express'); 
const proyectoController = require('../controllers/proyectos');

// Mini app 
const router = express.Router()

//proyecto
router.post('/Proyectos',proyectoController.getObtenerProyectos);
router.post('/AgregarProyecto',proyectoController.postAgregarProyecto);

module.exports = router; 