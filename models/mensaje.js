const Sequelize = require('sequelize');

const Mensaje = (sequelize) =>{
    sequelize.define('mensaje',{
        idMensaje:{
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        destinatario:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        fecha:{
            type: Sequelize.DATE,
            allowNull: false
        },
        genero:{
            type: Sequelize.CHAR,
            allowNull: false
        },
        contenido:{
            type: Sequelize.STRING(250),
            allowNull: false
        }
    })
}
module.exports = Mensaje;