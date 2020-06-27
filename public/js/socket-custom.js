var socket = io();

socket.on('connect',
    function() {
        console.log('Conectado al servidor ...')

    });

// On es para escuchar
socket.on('disconnect',
    function() {
        console.log('Perdimos conexionon con el servidor ...')
    });

//Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuarxio: 'Carlos',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del servidor:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor', mensaje);

});