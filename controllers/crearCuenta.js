const Jugador = require('../util/database').models.jugador; 
const path = require('path');
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.getAgregarJugador = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioJugador.html')); 
};  

exports.postAgregarJugador = (req, res)=>{
    console.log(req.body);
    let now = new Date();
    let date = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let year = now.getFullYear();

 
    Jugador.create({
        username:req.body.Username,
        correo:req.body.CorreoElectronico,
        password:req.body.password,
        nombre:req.body.nombreUsuario,
        fechaNacimiento:req.body.FechaNacimiento,
        genero: req.body.genero,
        pais: req.body.pais,
        nivelEstudios: req.body.nivel,
        carreraInteres: req.body.Carrera,
        materiaFavorita: req.body.materia,
        fechaRegistro: year + "-" + month + "-" + date
    }).then(resultado=>{
        console.log("Registro exitoso")
    res.redirect("/jugador/confirmacion")
    })
    .catch(error=>{
        console.log(error)
        res.send("Nombre de usuario ya existente");
    }); 
};