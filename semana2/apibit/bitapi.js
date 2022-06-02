const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');

        // sacar los datones que es importante
        var data = response.data.bpi
        var USD = data.USD.code.toString()+" : "+data.USD.rate.toString()
        var EUR = data.EUR.code.toString()+" : "+data.EUR.rate.toString()
        var GBP = "GBP : "+data.GBP.rate.toString()
       console.log("el valor del bitcoinds")
       console.log(USD)
       console.log(GBP)
       console.log(EUR)
        

       
    })