
// Conexión con la BD
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');

const sequelize = new Sequelize('Dibujando', 'sa', 'Password1234$', { // Nombre de la BD, usuario y contraseña para SQL Server
    dialect: 'mssql',
    host: 'localhost', // 'localhost'
    dialectOptions:{ 
        options:{
            useUTC: false,
            dataFirst: 1
        }        
    },
    define:{
        timestamps: false,
        freezeTableName: true
    }
}); 

//Cargar los modelos
const modelDefiners = [
    require('../models/usuario'),
    require('../models/mensaje'),
    require('../models/nuevapropuesta'),
    require('../models/donacion'),
    require('../models/ayuda'),
    require('../models/preguntasfrecuentes'),
    //require('../models/proyectousuario'),
    require('../models/proyectos')
    
];

//Vincular el objeto de conexión con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

// Exportando el objeto sequelize 
module.exports = sequelize; 