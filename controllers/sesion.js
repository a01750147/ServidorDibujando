// Modelo asociado a la tabla usuario 
const path = require('path');
const sesion = require('../util/database').models.usuario;
const Sequelize = require('sequelize');
 
/*exports.postBuscarUsuario = (req, res) => {
    // Para accedeer al json de sesionUsuario
    console.log(req.body.sesionUsuario.correoElectronico);  
    console.log(req.body.sesionUsuario.contrasena); 
};*/ 

exports.postBuscarUsuario = (req,res)=>{
    sesion.findAll({
    where: {
        contrasena:req.body.sesionUsuario.contrasena,
        correo: req.body.sesionUsuario.correoElectronico 
      }
    })
    .then(registros=>{
        var data=[];
        data.push(registros.dataValues); 
        console.log(data)       
        if (registros.length == 0){
            res.send("Lo sentimos: Usuario o contraseña no válidos")
        }else{
            res.send("Bienvenido: Usuario válido")
        }
    }).catch(error => console.log(error))
};