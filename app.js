const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
    // const base = 5;
crearArchivo(argv.b,argv.l,argv.r)    
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));

console.log('TEXT COLORADO lib colors'.rainbow);
