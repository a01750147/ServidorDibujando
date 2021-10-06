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
        }).then(donaciones =>{
            var data=[];
            data.push(donaciones.dataValues);
            console.log(data)
            console.log(registro)
            if(registro == null){
                res.send('Correo no válido')
            }else{
                res.send({
                    nombre: registro.nombre,
                    historial: registro.historial,
                    donaciones: data
                })
            }
        }).catch(error =>{
            console.log(error)
            res.send(error)
        })
    }).catch(error =>{
        console.log(error)
        res.send(error)
    })
};