const Sequelize = require('sequelize');

const Nuevapropuesta = (sequelize) =>{
    sequelize.define('nuevapropuesta',{
        idNuevaPropuesta:{
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        },
        nombreProyecto:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        descripcion:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}
module.exports = Nuevapropuesta;