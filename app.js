var express = require('express');
var app = express();

var server = require('http').Server(app).listen(8080);
//var io = require('socket.io')(server);

// répertoires "publics"
app.use('/js', express.static(__dirname + '/js'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

// définition des routes
app.get('/', function (req, res, next) {
	res.sendFile(__dirname + '/index.html');
});
app.use(function (req, res, next) {
	res.redirect('/'); // Page non trouvée ? redirection vers /
});

// io.sockets.on('connection', function (socket) {

	// socket.on('share-screen', function (data) {
		
	// });
	// socket.on('error', function (err) {
		
	// });

// });
