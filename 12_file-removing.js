const fs = require('fs');

// fs.rmdirSync('./testdir'); // remove the testdir directory


try {
    fs.unlinkSync('./newdir/newfile.js'); // delete files
    console.log('File successfully deleted.')
}catch(err){
    console.log('Here is the error: ' + err);
}