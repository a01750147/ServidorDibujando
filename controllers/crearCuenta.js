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
        correo: req.body.usuario.correoElectronico,
        tipoUsuario: "normal",
        nombre: req.body.usuario.nombre,
        fechaNacimiento: "2020-02-07",
        genero: req.body.usuario.genero,
        pais: req.body.usuario.pais,
        contrasena: req.body.usuario.contrasena,
        historialDonaciones: "2015-08-09"
    }).then(resultado=>{
        console.log("Registro exitoso")
        res.send("Registro Exitoso")
    //res.redirect("/jugador/confirmacion")
    })
    .catch(error=>{
        console.log(error)
        res.send("Nombre de usuario ya existente");
    }); 
};

//Para mandar el correo a la app
exports.postVerUsuario = (req,res)=>{
    usuario.findOne({
        where: {
            correo: req.body.CorreoElectronico
        }
    })
    .then(registro=>{
        var data=[];
        data.push(registro.dataValues);
        console.log(data)
        if(registro.length == 0){
            res.send('Correo no válido')
        }else{
            res.send(data)
        }
    }).catch(error => console.log(error))
};