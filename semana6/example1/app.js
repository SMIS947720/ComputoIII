var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');

});

//declara  par que se actualize
var client = 0;

io.on('connection', (socket)=> {
    client++;
    io.sockets.emit('broadcast', {
        information: client + ' cliente conectados'
    });
    console.log("Un usuario se ha conectado");
    socket.on('disconnect',() =>{
        client--;
        io.sockets.emit('broadcast',{
            information: client +' clientes conectados'

        })
        
    })
    // recibir datos del cliente
    socket.on('clientEvent',(data) =>{
        console.log(data);
    });

    //tiempo de espera
    setTimeout(()=>{
        socket.send('mesaje despues de 4 segundos');
    }, 4000);

    socket.on('disconnect', ()=>{
        console.log('un usuario se ha desconectado');
    })
});

http.listen(3000,()=>{
    console.log('escuchando puerto: 3000');
})