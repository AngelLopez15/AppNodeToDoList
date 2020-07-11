const porHacer = require('./por-hacer/por-hacer');

const argv = require('./config/yargs').argv

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        break;
    case 'listar':
    
        break;
    case 'actualizar':
    
    break;
    default:
        console.log('comando no reconocido')
        break;
}