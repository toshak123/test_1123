var http = require('http');
// const FS = require("fs");

// var options = {
//     key: FS.readFileSync("server.key"),
//     cert: FS.readFileSync("server.crt")
// };

// var app = https.createServer(options);
var app = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello World\n");
});

var io = require('socket.io')(app);


app.listen((process.env.PORT || 3001), function() {

    console.log('listening on *:3001');

});

setInterval(function() {

    /*
      our message we want to send to the client: in this case it's just a random
      number that we generate on the server
    */
    var msg = Math.random();
    io.emit('message', msg);
    console.log(msg);

}, 1000);