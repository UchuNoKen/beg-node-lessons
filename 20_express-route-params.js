const express = require('express');
let app = express();

const port = process.env.PORT || 9000;

app.get('/', function(req, res){
    res.send('HOME')
});

app.get('/post/:id/category/:category_id/topic/:topic_id', (req, res) => {

    res.send(`
    
        <p>Here is ${req.params.id}</p>
        <p>Here is ${req.params.category_id}</p>
        <p>Here is ${req.params.topic_id}</p>
    
    `);
    
});

app.listen(port);

console.log('It is working');