// Modelo asociado a la tabla usuario 
const path = require('path');
const usuario = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
const donacion = require('../util/database').models.donacion;
const sequelize = require('../util/database');


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
            var Donacioness = [];
            sequelize.query("SELECT sum([montoDonacion]) as Donaciones From [dbo].[donacion] where [usuarioCorreo] =" + "'"+ req.body.CorreoElectronico + "'",{
                type: Sequelize.QueryTypes.SELECT
            }).then(resultado =>{
                Donacioness.push(resultado[0].Donaciones);
                console.log("Estas son las donaciones: " + Donacioness[0])
                res.send({
                    nombre: registro.nombre,
                    usuarioCorreo: registro.correo,
                    historial: Donacioness[0]
                })
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

exports.ListaUsuarios = (req,res)=>{
    sequelize.query("SELECT u.nombre, d.usuarioCorreo, sum(d.montoDonacion) as 'montoTotal', d.nombreProyectoDonar from usuario u , donacion d where d.usuarioCorreo = u.correo group by u.nombre, d.usuarioCorreo,  d.nombreProyectoDonar",{
        type: Sequelize.QueryTypes.SELECT
    }).then(resultado =>{
        console.log(resultado)
        res.send(resultado) 
    })
};