// modulo Http
const http = require("http")

//ruta de la direccion de la vista
const server= http.createServer((req,res)=>{
    if(req.url == "/") {
        res.write("<h1>Modulo HTTP con nodejs, Programacion VI<h1>")
        res.statusCode = 200  

        res.end()
    }
})

//crear conexion del server al puerto 8080
server.listen((8080),()=>{
    console.log("Server corriendo")
})
