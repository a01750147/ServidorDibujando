// Modelo asociado a la tabla usuario 
const path = require('path');
const usuario = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
const donacion = require('../util/database').models.donacion;
const sequelize = require('../util/database');

exports.BorrarCuenta = (req,res)=>{
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
            sequelize.query("Delete From [dbo].[usuario] Where [correo] =" + "'"+ req.body.CorreoElectronico + "'",{
                type: Sequelize.QueryTypes.DELETE
            })
            res.send('Usuario Eliminado')
        }
    }).catch(error => console.log(error))
};





