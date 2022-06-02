var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('programacion VI');
});

app.listen(8080, function(){
    console.log("Ejemplo de modulo express, en puerto 8080");
})