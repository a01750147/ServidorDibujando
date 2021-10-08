const Sequelize = require('sequelize');

const Donacion = (sequelize) =>{
    sequelize.define('donacion',{
        idDonacion:{
            type: Sequelize.INTEGER,
            allowNull: false, 
            primaryKey: true
        },
        nombreProyectoDonar:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        montoDonacion:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fechaDonacion:{
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    })
}
module.exports = Donacion;