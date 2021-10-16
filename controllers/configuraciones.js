// Modelo asociado a la tabla usuario 
const path = require('path');
const usuario = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const bcrypt = require('bcryptjs');

exports.BorrarCuenta = (req,res)=>{
    usuario.findOne({
        where: {
            //correo: req.body.CorreoElectronico
            correo: 'andrea@outlook.com'
        }
    })
    .then(registro=>{
        var data=[];
        data.push(registro.dataValues);
        console.log(data)
        if(registro.length == 0){
            res.send('Correo no válido')
        }else{
            sequelize.query("Delete From [dbo].[usuario] Where [correo] = 'andrea@outlook.com'",{
                type: Sequelize.QueryTypes.DELETE
            })
            res.send('Usuario Eliminado')
        }
    }).catch(error => console.log(error))
};


exports.EditarNombre = (req,res)=>{
    usuario.findOne({
        where: {
            correo: 'andrea@outlook.com'
        }
    })
    .then(registro=>{
        var data=[];
        data.push(registro.dataValues);
        console.log(data)
        if(registro.length == 0){
            res.send('Correo no válido')
        }else{
            sequelize.query("Update [dbo].[usuario] Set [nombre]=" + "'" + req.body.Nombre.NuevoNombre +"'" + "Where [correo] =  'andrea.outlook.com'",{
                type: Sequelize.QueryTypes.UPDATE
            })
            res.send('Nombre Actualizado')
        }
    }).catch(error => console.log(error))
};
exports.EditarContrasena = (req,res)=>{
    usuario.findOne({
        where: {
            correo: 'andrea@outlook.com'
        }
    })
    .then(registro=>{
        var data=[];
        data.push(registro.dataValues);
        console.log(data)
        if(registro.length == 0){
            res.send('Correo no válido')
        }else{
            sequelize.query("Update [dbo].[usuario] Set [contrasena]=" + "'" + bcrypt.hashSync(String(req.body.Nombre.NuevoNombre),9) +"'" + "Where [correo] =  'andrea.outlook.com'",{
                type: Sequelize.QueryTypes.UPDATE
            })
            res.send('Contraseña Actualizado')
        }
    }).catch(error => console.log(error))
};





