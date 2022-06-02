const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Ingresa el primer numero: ', (a) => {

    if(isNaN(a)) {
        console.log('Debes escribir un numero!');
        return rl.close();
    }
    rl.question('Ingresa el segundo numero: ', (b) => {
        
        if(isNaN(b)) {
            console.log('Debes escribir un numero!');
            return rl.close();
        }
        let suma = Number(a) + Number(b);
        console.log(`El resultado de la suma es ${suma}.`);
        let resta = Number(a) - Number(b);
        console.log(`El resultado de la resta es ${resta}.`);
        let multip = Number(a) * Number(b);
        console.log(`El resultado de la multiplicacion es ${multip}.`);
        let dividir = Number(a) / Number(b);
        console.log(`El resultado de la división es ${dividir}.`);
        return rl.close();
    });
});
