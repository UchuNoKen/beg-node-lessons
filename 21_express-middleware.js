const express = require('express');
let app = express();

const port = process.env.PORT || 9000;

app.use('/css', express.static(__dirname + "/parentdir"));


app.use('/css', (req, res, next) => {

    console.log('middleware');

    next();

}); 

app.get('/', (req, res) =>{


    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet"  href="/css/style.css">
        <title>Form</title>
    </head>
    <body>
        
        <form action="" method="post">
    
            <label for="title">Title</label>
            <input type="text" id="title" name="title"><br>
            <label for="category">Category</label>
            <input type="text" id="category" name="category"><br>
            <label for="description">Description</label>
            <input type="text" id="description" name="description">
            
            <button>Submit</button>
        </form>
    
    </body>
    </html>`);

    
});

app.listen(port);

console.log('It is working');