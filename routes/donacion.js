const express = require('express'); 
const donacionController = require('../controllers/donacion');

// Mini app 
const router = express.Router()

//crear perfil
router.post('/NuevaDonacion',donacionController.postAgregarDonacion);

module.exports = router; 