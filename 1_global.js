var path = require('path');

var name = 'Joe Blow'

var newName = name.toUpperCase(name);

global.console.log(`${newName}`);

console.log(__dirname); // C:\Users\A25628\Desktop\udemy\nodejsForBeg
console.log(__filename); // C:\Users\A25628\Desktop\udemy\nodejsForBeg\global.js
console.log(path.basename(__filename)); // global.js