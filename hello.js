const os = require('os');
let express = require('express');
let app = express();

app.get('/', function( request, response ){
    response.sendFile( __dirname + '/ajax.html' );
});

app.get('/greenfox', function( request, response ){
    let colors = ['red','green','blue'];
    response.json(colors);
});

app.listen( 1234, function(){
    console.log('hello from node on port 1234'); 
});