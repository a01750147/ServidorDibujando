// Modelo asociado a la tabla proyectos
const path = require('path');
const donacion = require('../util/database').models.donacion;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.postAgregarDonacion = (req, res)=>{
    console.log(req.body);
    let now = new Date();
    let date = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();
  
    donacion.create({
        nombreProyectoDonar: req.body.nombreProyectoDonar,
        montoDonacion: req.body.montoDonacion,
        fechaDonacion: year + "-" + month + "-" + date,
        
    }).then(resultado=>{
        console.log("Donación exitosa")
        res.send("Donación Exitosa")
    
    })
    .catch(error=>{
        console.log(error)
        res.send("Error en Donación");
    }); 
};
