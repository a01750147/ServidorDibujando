// Modelo asociado a la tabla proyectos
const path = require('path');
const Proyecto = require('../util/database').models.proyectos;
const Sequelize = require('sequelize');

exports.postAgregarProyecto=(req,res)=>{
    console.log(req.body);
    Proyecto.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        }) 
        .catch(error=>{
            console.log(error);
            res.send("Hubo un problema");
        })
};

exports.getObtenerProyectos = (req,res)=>{
    Proyecto.findAll({
        where: { 
        }
    }).then(proyectos =>{
        if(proyectos.length == 0){
            res.send('No existen proyectos')
        }else{
            var data=[];
            proyectos.forEach(proyectos => {
                data.push(proyectos.dataValues);
            });
            console.log(data)
            res.send(data)
        }
    }).catch(error =>{
        console.log(error)
        res.send(error)
    })
};