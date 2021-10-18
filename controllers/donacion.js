// Modelo asociado a la tabla proyectos
const path = require('path');
const donacion = require('../util/database').models.donacion;
const usuario = require('../util/database').models.usuario; 
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.postAgregarDonacion = (req, res)=>{
    console.log(req.body);
    let now = new Date();
    let date = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();
  
    donacion.create({
        nombreProyectoDonar: req.body.donacion.nombreProyectoDonar,
        montoDonacion: req.body.donacion.montoDonacion,
        fechaDonacion: year + "-" + month + "-" + date,
        usuarioCorreo: req.body.donacion.usuarioCorreo,
        proyectoIdProyectos: req.body.donacion.proyectoIdProyectos
        
    }).then(resultado=>{
        
        console.log("Donación Exitosa")
        res.send("Donación Exitosa")
    
    })
    .catch(error=>{
        console.log(error)
        res.send("Error en Donación");
    }); 
};
