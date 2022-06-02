const fetch = require('node-fetch');
const fs = require('fs');

   async function getBits() {
       try{
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        let bitcoins = "";
        Array.from(data).forEach(bit => {
            bitcoins += `${bit[code]}, ${bit[rate]}`;
        });
        //crear archivo
        fs.writeFile('ValorBitc88ins.csv', bitcoins,(error) =>{
            if(error){
                console.log(error);
                return;
            }
            console.log(error)
        })
        //console.log(data)

       }catch(error){
           console.log(error)
       }
       
   }

   getBits();