
const fs = require('fs');
const { error } = require("console");

let listadoPorHacer = []

const guardarDB= ()=>{
    // convertimos el objeto listado por hacer a un objeto JSON
    let data = JSON.stringify(listadoPorHacer)

    // escribimos la data en el archivo json
    // recibe 3 parametros 1-la ruta donde se va a guardar la informacion
    // 2-data que seva almacenar
    // 3-El mesaje de error
    fs.writeFile('./db/data.json', data, (err)=>{
        if (err) {
            throw new Error('No se pudo grabar la informacion', err)
        }
    })
}

const crear = (descripcion) => {
    
    let porHacer = {
        // solo se pone descripcion por que si la propiedad se llama igual que
        // su valor no es necesario ponerlo dos veces
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer)

    guardarDB()

    return porHacer
}

module.exports={crear}