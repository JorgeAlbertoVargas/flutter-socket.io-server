const express = require('express');     //Llamar a Express
const app = express();                 //Crear Aplicacion

const path = require('path');          //Permite crear una ruta
require('dotenv').config();            //Se usa para obtener el Puerto desde .env File

//Node Server con Sockets
const server = require('http').createServer(app);

//Exportar IO
module.exports.io = require('socket.io')(server);

//Llamar al archivo Sockets
require('./sockets/socket');


//Ruta Publica
const publicPath = path.resolve(__dirname,'public');    //Apunta al Folder Public

//Usar la Ruta
app.use(express.static(publicPath));
//Poner a escuchar el server
// app.listen(3000,(err)=>{

//     if(err)throw new Error(err);    //Verifica si hay algun error
//     console.log(`Servidor corriendo en puerto !!!`,3000);

// })

server.listen(process.env.PORT,(err)=>{

    if(err)throw new Error(err);    //Verifica si hay algun error
    console.log(`Servidor corriendo en puerto:`,process.env.PORT);

})
