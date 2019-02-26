const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/post', express.static(__dirname + "/parentdir"));

app.use((req, res, next) => {

    console.log('middleware');

    next();

}); 


app.post('/post', (req, res) => {
    console.log('Still working');
    console.log(`${req.body.email}`);
    console.log(req.body);



});

app.listen(9000);

console.log('It is working');