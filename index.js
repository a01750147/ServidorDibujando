const bodyParser = require("body-parser");
const path = require("path")
const express = require('express');
const sequelize = require('./util/database') 

const app=express()

app.use(express.static(path.join(__dirname,"public"))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

const UsuarioRoutes = require('./routes/usuario');
const sesionRoutes = require("./routes/sesion");
const PerfilUsuarioRoutes = require("./routes/crearPerfilUsuario")
const ProyectosRoutes = require("./routes/proyectos")
const DonacionRoutes = require("./routes/donacion")

app.use('/Usuario',UsuarioRoutes);
app.use('/Sesion', sesionRoutes); 
app.use('/crearPerfilUsuario', PerfilUsuarioRoutes);
app.use('/proyectos', ProyectosRoutes);
app.use('/donacion', DonacionRoutes);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

let puerto=8080;
// Establece vínculo entre la conexión del servidor y la BD
sequelize.sync({force:false})
    .then(resultado=>{
        console.log("Conexión exitosa");
        // Lanza el servidor para escuchar peticiones
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080")); 
    })
    .catch(error=>console.log(error));       