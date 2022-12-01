const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es número base para la multiplicación'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',        
        default: false,
        describe: 'Muestra tabla en consola'
    })
    .option('r',{
        alias: 'rango',
        type: 'number',        
        default: 10,
        describe: 'Rango limite'
    })
    .check((argv, options)=>{
        console.log('argv.b: ', argv.b);
        console.log('argv.l: ', argv.l);
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;