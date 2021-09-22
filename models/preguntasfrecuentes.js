const Sequelize = require('sequelize');

const Preguntasfrecuentes = (sequelize) =>{
    sequelize.define('preguntasfrecuentes',{
        idPreguntasFrecuentes:{
            type: Sequelize.STRING(250),
            allowNull: false, 
            primaryKey: true
        },
        pregunta:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        respuesta:{
            type: Sequelize.STRING(250),
            allowNull: false
        }
    })
}
module.exports = Preguntasfrecuentes;