
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripción de la tarea por hacer'
        },
        completado:{
            alias:'c',
            default:'true',
            desc:'Marca como completado una tarea'
        }
    })
    .help()
    .argv

module.exports = {argv}