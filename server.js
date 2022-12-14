const fs = require('fs');

fs.writeFile('nfs/usuario.txt','Prueba para nfs', (error) =>{
    if(error){
        console.log(`Error: ${error}`);
    }
})