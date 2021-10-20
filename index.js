const bodyParser = require("body-parser");
const path = require("path")
const express = require('express');
const sequelize = require('./util/database') 

// Para https 
const fs = require('fs'); 
const https = require('https'); 

const app=express()

app.use(express.static(path.join(__dirname,"public"))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

const UsuarioRoutes = require('./routes/usuario');
const sesionRoutes = require("./routes/sesion");
const PerfilUsuarioRoutes = require("./routes/crearPerfilUsuario")
const ProyectosRoutes = require("./routes/proyectos")
const ConfiguracionesRoutes = require("./routes/configuraciones")
const DonacionRoutes = require("./routes/donacion")
const NuevaPropuestaRoutes = require("./routes/nuevapropuesta")

app.use('/Usuario',UsuarioRoutes);
app.use('/Sesion', sesionRoutes); 
app.use('/crearPerfilUsuario', PerfilUsuarioRoutes);
app.use('/proyectos', ProyectosRoutes);
app.use('/configuraciones', ConfiguracionesRoutes);
app.use('/donacion', DonacionRoutes);
app.use('/nuevapropuesta', NuevaPropuestaRoutes);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

let puerto=443;
/* Establece vínculo entre la conexión del servidor y la BD
sequelize.sync({force:false})
    .then(resultado=>{
        console.log("Conexión exitosa");
        // Lanza el servidor para escuchar peticiones
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080")); 
    })
    .catch(error=>console.log(error)); */

// Establece vínculo entre la conexión del servidor y la BD
sequelize.sync({force:true})
    .then(resultado=>{
        console.log("Conexión exitosa");
        // Lanza el servidor para escuchar peticiones
        //app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080")); 
        https.createServer({
            key: fs.readFileSync('my_cert.key'),
            cert: fs.readFileSync('my_cert.crt')
        }, app).listen(puerto, function(){
            console.log("Servidor en línea en el puerto 443")
        }); 
    })
    .catch(error=>console.log(error)); 