// Modelo asociado a la tabla usuario 
const path = require('path');
const sesion = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
 
/*exports.postBuscarUsuario = (req, res) => {
    // Para accedeer al json de sesionUsuario
    console.log(req.body.sesionUsuario.correoElectronico);  
    console.log(req.body.sesionUsuario.contrasena); 
};*/ 

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