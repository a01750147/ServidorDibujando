const Sequelize = require('sequelize');

const Usuario = (sequelize) =>{
    sequelize.define('usuario',{
        correo:{
            type: Sequelize.STRING(50),
            allowNull: false, 
            primaryKey: true
        },
        tipoUsuario:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nombre:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        fechaNacimiento: {
            type: Sequelize.DATE,
            allowNull: false
        },
        genero:{
            type: Sequelize.CHAR,
            allowNull: false
        },
        pais:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        contrasena:{
            type: Sequelize.STRING(300),
            allowNull: false
        }
    })
}
module.exports = Usuario;