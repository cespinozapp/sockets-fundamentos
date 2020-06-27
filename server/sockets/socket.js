const { io } = require('../server.js');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*
        if (mensaje.usuario) {
            callback({
                message: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                message: 'TODO SALIO MAL'
            });
        }
        */

    })
});