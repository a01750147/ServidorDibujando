// Modelo asociado a la tabla usuario 
const path = require('path');
const usuario = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
const donacion = require('../util/database').models.donacion;


exports.perfilUsuario = (req,res)=>{
    usuario.findOne({
        where: {
            correo: req.body.CorreoElectronico
        }
    })
    .then(registro=>{
        donacion.findAll({
            where: { 
                usuarioCorreo: req.body.CorreoElectronico
            }
        })
        console.log(registro)
        if(registro == null){
            res.send('Correo no válido')
        }else{
            res.send({
                nombre: registro.nombre,
                historial: registro.historial,
            })
        }
        }).catch(error =>{
            console.log(error)
            res.send(error)
        })
};

exports.perfilDonaciones = (req,res)=>{
    donacion.findAll({
        where: { 
            usuarioCorreo: req.body.CorreoElectronico
        }
    }).then(donaciones =>{
        if(donaciones.length == 0){
            res.send('Correo no válido')
        }else{
            var data=[];
            donaciones.forEach(donacion => {
                data.push(donacion.dataValues);
            });
            console.log(data)
            res.send(data)
        }
    }).catch(error =>{
        console.log(error)
        res.send(error)
    })
};