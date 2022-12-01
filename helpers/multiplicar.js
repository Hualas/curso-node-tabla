const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar=false,rango=10) =>{

    try {
        let salidatxt = "";
        let salidaconsola = "";
        for(let i = 1; i<=rango; i++){
            // console.log(`${base} x ${i} = ${ base * i }\n`);
            salidatxt += `${base} x ${i} = ${ base * i }\n`;
            salidaconsola += `${base} ${'x'.rainbow } ${i} = ${ base * i }\n`;
        }

        if(listar){
            console.log('================'.red);
            console.log(`   Tabla del `, colors.blue(base));
            console.log('================'.red);
            console.log(salidatxt);
        }      
        // fs.writeFile('tabla-5.txt', salida, (err)=>{
        //     if(err) throw err;
        //     console.log('Tabla-5.txt creado');    
        // });
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salidatxt);

        return `tabla-${base}.txt`;       
    } catch (error) {
        throw error   
    }
    
}

module.exports = {
    crearArchivo: crearArchivo
}