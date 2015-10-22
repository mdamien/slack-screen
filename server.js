var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, './www')));

var messages = [];

app.get('/send', function(req, res){
    var msg = req.param('text');
    messages.push(msg);
    io.emit('messages', messages);
    res.send('thanks for sharing: '+msg);
});

app.get('/random', function(req, res){
    var msg = Math.random().toString();
    messages.push(msg);
    io.emit('messages', messages);
    res.send('thanks for sharing: '+msg);
});


io.on('connection', function (socket) {
    console.log('User connected. Socket id %s', socket.id);
    io.emit('messages', messages);
    socket.on('disconnect', function () {
        console.log('User disconnected. %s. Socket id %s', socket.id);
    });
});

var PORT = 80;

http.listen(PORT, '0.0.0.0', function () {
    console.log('listening on: 0.0.0.0:'+PORT);
});
