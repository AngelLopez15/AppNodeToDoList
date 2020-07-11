const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')

const argv = require('./config/yargs').argv

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (const tarea of listado) {
            console.log('=========Por hacer========='.green)
            console.log(tarea.descripcion)
            console.log(`Estado : ${tarea.completado}`)
            console.log('==========================='.green)
        }
        break;
    case 'actualizar':
    
    break;
    default:
        console.log('comando no reconocido')
        break;
}