// Modelo asociado a la tabla proyectos
const path = require('path');
const nuevapropuesta = require('../util/database').models.nuevapropuesta;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.postAgregarPropuesta = (req, res)=>{
    console.log(req.body);
      
    nuevapropuesta.create({
        nombreProyecto: req.body.nuevapropuesta.nombreProyecto,
        descripcion: req.body.nuevapropuesta.descripcion,
        usuarioCorreo: req.body.nuevapropuesta.usuarioCorreo,
        
    }).then(resultado=>{
        
        console.log("Propuesta enviada")
        res.send("Propuesta enviada")
    
    })
    .catch(error=>{
        console.log(error)
        res.send("Error en Propuesta");
    }); 
};


exports.getObtenerPropuestas = (req,res)=>{
    nuevapropuesta.findAll({
        where: { 
        }
    }).then(resultado =>{
        if(resultado.length == 0){
            res.send('No existen propuestas')
        }else{
            var data=[];
            resultado.forEach( resultado => {
                data.push(resultado.dataValues);
            });
            console.log(data)
            res.send(data)
        }
    }).catch(error =>{
        console.log(error)
        res.send(error)
    })
};
