const express = require('express');
let app = express();

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {

    res.send('<h1> Hello </h1>');
    
});

app.get('/api', (req, res) => {

    // res.send('<h1> API PAGE </h1>');

    res.json({name: 'Joe'});
});

app.listen(port);

console.log('It is working');