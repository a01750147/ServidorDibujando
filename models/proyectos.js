const Sequelize = require('sequelize');

const Proyectos = (sequelize) =>{
    sequelize.define('proyectos',{
        idProyectos:{
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        nombreProyecto:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        tipoProyecto:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        descripProyecto:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}
module.exports = Proyectos;