const os = require('os');
let express = require('express');
let app = express();

app.get('/greenfox', function( request, response ){
    let stuff = {
        'location': 'greenfox'
    }
    response.json(stuff).status(201);
});

app.listen( 1234, function(){
    console.log('hello from node on port 1234'); 
});