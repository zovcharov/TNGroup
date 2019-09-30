var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.get('favicon.ico', (req,res) =>{
    res.sendFile(path.join(__dirname, 'dist/favicon.ico'));
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});
