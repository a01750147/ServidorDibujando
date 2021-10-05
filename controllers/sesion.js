// Modelo asociado a la tabla usuario 
const path = require('path');
const sesion = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
 
exports.postBuscarUsuario = (req,res)=>{
    sesion.findOne({
    where: {
        //contrasena:req.body.contrasena,
        correo: req.body.CorreoElectronico
      }
    })
    .then(registros=>{
        //console.log(registros)
        //localStorage.setItem('correo', req.body.CorreoElectronico)
        var data=[];
        data.push(registros.dataValues); 
        console.log(data)       
        if (registros.length == 0){
            res.send("Usuario no válido")
        }else{
            res.send("Usuario válido")
        }
    }).catch(error => console.log(error))
};