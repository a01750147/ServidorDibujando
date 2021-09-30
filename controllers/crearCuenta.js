const usuario = require('../util/database').models.usuario; 
const path = require('path');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.postAgregarUsuario = (req, res)=>{
    console.log(req.body);
    /*
    let now = new Date();
    let date = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();
    */
 
    usuario.create({
        correo: req.body.CorreoElectronico,
        tipoUsuario: "admin",
        nombre: "Liam",
        fechaNacimiento: "2001-07-12",
        genero: "M",
        pais: "Mexico",
        contrasena: "rick",
        datosPago: "muchos",
        historialDonaciones: "2015-08-09"
    }).then(resultado=>{
        console.log("Registro exitoso")
    //res.redirect("/jugador/confirmacion")
    })
    .catch(error=>{
        console.log(error)
        res.send("Nombre de usuario ya existente");
    }); 
};