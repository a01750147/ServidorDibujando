const Sequelize = require('sequelize');

const Ayuda = (sequelize) =>{
    sequelize.define('ayuda',{
        idAyuda:{
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        pregunta:{
            type: Sequelize.STRING(250),
            allowNull: false
        }
    })
}
module.exports = Ayuda; 