const Sequelize = require('sequelize');

const Nuevapropuesta = (sequelize) =>{
    sequelize.define('nuevapropuesta',{
        idNuevaPropuesta:{
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        nombrePopuesta:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        descripcion:{
            type: Sequelize.STRING(250),
            allowNull: false
        }
    })
}
module.exports = Nuevapropuesta;