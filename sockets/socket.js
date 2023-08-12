//Importar IO desde Index
const {io}= require('../index');

//Mensajes de Sockets
io.on('connection',client=>{
    console.log('Cliente Conectado');

    client.on('disconnect',()=>{
        console.log('Cliente Desconectado');
    });

    //Escuchar Mensaje
    client.on('Mensaje',(payload)=>{
        console.log('Mensaje:',payload);

        //Mandar Mensaje a todos los clientes conectados
        io.emit('Mensaje',{Admin: 'Nuevo Mensaje'});
    });
})
