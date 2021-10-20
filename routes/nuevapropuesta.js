const express = require('express'); 
const nuevapropuestaController = require('../controllers/nuevapropuesta');

// Mini app 
const router = express.Router()

//crear propuesta
router.post('/NuevaPropuesta',nuevapropuestaController.postAgregarPropuesta);

//Ver propuesta
router.post('/VerPropuestas',nuevapropuestaController.getObtenerPropuestas);

module.exports = router; 