const http = require('http')
http.createServer(function(req,res){
    res.end('BIENVENIDO')
}).listen(8080)