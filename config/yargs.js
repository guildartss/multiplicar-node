
const opc = {
    base: {
        demand: true,
        alias: 'b'
    }, limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
        .command('listar', 'imprime en consola la tabla multiplicar', opc)
        .command('crear', 'imprime en un archivo la tabla multiplicar', opc)
.help()
.argv;

module.exports = {
    argv
}