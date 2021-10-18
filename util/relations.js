//Función que recibe el objeto de conexión
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Ayuda = sequelize.models.ayuda;
    const Donacion = sequelize.models.donacion;
    const Mensaje = sequelize.models.mensaje;
    const Nuevapropuesta = sequelize.models.nuevapropuesta;
    const Preguntasfrecuentes = sequelize.models.preguntasfrecuentes;
    const Proyectos = sequelize.models.proyectos;
    //const Proyectosusuario = sequelize.models.proyectousuario;
    const Usuario = sequelize.models.usuario;
    
    //Relaciones
    Usuario.hasMany(Nuevapropuesta);
    Nuevapropuesta.belongsTo(Usuario);

    /*Usuario.hasMany(Proyectosusuario);
    Proyectosusuario.belongsTo(Usuario);*/

    Usuario.hasMany(Donacion);
    Donacion.belongsTo(Usuario);

    Usuario.hasMany(Ayuda);
    Ayuda.belongsTo(Usuario);

    Usuario.hasMany(Mensaje);
    Mensaje.belongsTo(Usuario);

    Preguntasfrecuentes.hasMany(Ayuda);
    Ayuda.belongsTo(Preguntasfrecuentes);

    /*Proyectos.hasMany(Proyectosusuario);
    Proyectosusuario.belongsTo(Proyectos);*/

    Proyectos.hasMany(Donacion);
    Donacion.belongsTo(Proyectos);

}

module.exports = {applyRelations};
