const fs = require('fs');

// rename and move file
fs.renameSync('./newfile.js', 'newDir/newfile2.js');

// rename and move directory
fs.renameSync('./newdir/childdir', './parentdir');