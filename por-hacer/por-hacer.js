
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

const cargarDB = () => {
    // Como al iniciar el programa el Json esta vacio nos va a disparar un error
    // Para manejarlo debemos hacer un try catch para manejar el error y hacer que
    // imprima un arreglo vacio en el Json cuando no tiene datos
    try {
        listadoPorHacer= require('../db/data.json')
    } catch (error) {
        listadoPorHacer=[]
    }
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    listadoPorHacer= require('../db/data.json')
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion===descripcion)
    console.log(index)
    if (index>=0) {
        listadoPorHacer[index].completado=completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) =>{
    listadoPorHacer= require('../db/data.json')
    // buscamos todos los elementos que NO coincidan con la descripcion que le pasemos
    // y esos son los que nos va a regresar el metodo filter para NO eliminarlos
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion!==descripcion)
    if(listadoPorHacer.length===nuevoListado){
        // quiere decir que no se elimino nada
        return false
    }else{
        // reemplazamos el listado viejo por el listado nuevo para actualizar laBD
        listadoPorHacer=nuevoListado
        guardarDB()
        return true
    }
}

const crear = (descripcion) => {

    cargarDB()

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

module.exports={crear, getListado, actualizar, borrar}