/*const modulo = require("/.firstModule");

console.log(modulo.propiedad);
modulo.saludar();

//modulos core
var data = [
    {
        a: 25,
        b: 32
    },
    {
        a: 73,
        b: 50

    }
]

console.log(data);
console.table(data);

//console.group

console.log("Bloque");
console.log("hola");
console.log("hello");
console.log("hola");
console.groupEnd("Bloque");*/

var fs = require('fs');
/*var parse = require('csv-parse');
var parser = parse.parse({columns: true}, function(err, records){
    console.log(records);
})
//fs.createReadStream(__dirname+'/frutas_metadata.csv').pipe(parser);
*/
var stringify = require('csv-stringify');
var someData =[
    {
        "Country": "El Salvador",
        "official language": "Spanish"
    },
    {
        "Country": "USA",
        "official language": "English"
    },
    {
        "Country": "Italy",
        "official language": "Italian"
    },
    {
        "Country": "Nigeria",
        "official language": "English"
    }
]

stringify.stringify(someData, {
    header: true
}, function(err, output){
    fs.writeFileSync('./data.csv', output)
}
)

//modulo nativo node-gyp