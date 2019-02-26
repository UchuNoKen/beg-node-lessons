// module.exports.title = "Node";
// module.exports.title2 = "Node2";
// module.exports.title3 = "Node3";

// module.exports.cal = () => {
//     console.log('Hello');
// };
// console.log(module.exports);

const object = require('./lib');

console.log(object.cal(75, 75));
console.log(object.someProp);