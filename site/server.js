
var app = require('express')(),
    server = require('http').createServer(app),
    fs = require('fs'),
    mime = require('mime');

var port = 3001;
server.listen(port);


// Handle all incoming web requests
app.get("*", function (request, response) {
    // check if the file exists on the file system
    fs.exists(__dirname + '/public' + request.path, function (exists) {
        if (exists) {
            // return the file found
            response.sendFile(__dirname + '/public' + request.path);

            response.setHeader("Content-Type", mime.lookup(__dirname + '/public' + request.path)); //Solution!

        }else{
            // cant find the file
            response.end("404!");
            //console.log(request);
            console.log("404 - " + __dirname + '/public' + request.path );

        }
    });
});