function saludo(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('se ha resuelto el promesa')
        }, 2000)
    })
}

async function mensaje(){
    const mensaje = await saludo();
    console.log('mesaje:', mensaje)
}
