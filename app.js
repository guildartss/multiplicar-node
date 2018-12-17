//
const argv = require('./config/yargs').argv;
var colors = require('colors');

const {crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
    let comando = argv._[0];

    switch (comando) {
        case 'listar':
        console.log(`la base es ${argv.base}`)
        console.log(`el limite es ${argv.limite}`)
            listarTabla(argv.base, argv.limite)
        break;
        case 'crear':
            crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));    
        break;
        case 'borrar':
        console.log('borrar');
        break;
        default:
        console.log('no es comando valido');
    }


/*let parametro = argv[2];
let base = parametro.split('=')[1];
*/

