// Modelo asociado a la tabla usuario 
const path = require('path');
const sesion = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
 

exports.postBuscarUsuario = (req,res)=>{
    sesion.findAll({
    where: {
        correo: req.body.sesionUsuario.correoElectronico 
      }
    })
    .then(registros=>{
        var data=[];
        registros.forEach(registro => {
            data.push(registro.dataValues)
        });
        console.log(data)       
        if (registros.length == 0){
            res.send("Lo sentimos: Usuario o contraseña no válidos")
        }else{
            console.log(data[0].contrasena)
            if(bcrypt.compareSync(String(req.body.sesionUsuario.contrasena),String(data[0].contrasena)) ||
            !bcrypt.compare(String(req.body.sesionUsuario.contrasena), "null")){
                res.send("Bienvenido: Usuario válido")
            }else{
                res.send("Lo sentimos: Usuario o contraseña no válidos")
            }
        }
    }).catch(error => console.log(error))
};

exports.postBuscarAdmin = (req, res) => {
    sesion.findAll({
        where: {
            correo: req.body.sesionAdmin.correoElectronico,
            tipoUsuario: "administrador"
        }
    })
    .then(registros => {
        var data = []; 
        registros.forEach(registro => {
            data.push(registro.dataValues)
        }); 
        console.log(data)
        if (registros.length == 0){
            res.send("Lo sentimos: Usuario o contraseña no válidos")
        } else {
            console.log(data[0].contrasena)
            if (req.body.sesionAdmin.contrasena == String(data[0].contrasena)){
                res.send("Bienvenido: Usuario válido")
            } else {
                res.send("Lo sentimos: Usuario o contraseña no válidos")
            }
            /*if (bcrypt.compareSync(String(req.body.sesionAdmin.contrasena), String(data[0].contrasena)) ||
            !bcrypt.compare(String(req.body.sesionAdmin.contrasena), "null")){
                res.send("Bienvenido: Usuario válido")
            } else {
                res.send("Lo sentimos: Usuario o contraseña no válidos")
            }*/
        }
    }).catch(error => console.log(error))
}; 