const fs = require('fs');

fs.writeFile('./modules/data.html', 'This file has just been created.\n', 'utf-8', (err) => {
    if(err){
        return err;
    }else{
        console.log('File was written and saved.\n');
    }
} );

fs.appendFile('./modules/data.html', '\nThis file has just been appended.\n', 'utf-8', (err) => {
    if(err){
        return err;
    }else{
        console.log('File was appended and saved.');
    }
} );