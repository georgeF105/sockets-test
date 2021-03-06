var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
	console.log('User connected')

	socket.on('SEND_MSG', function(msg) {
		console.log('Got msg: ',msg)
		io.emit('SEND_MSG', msg)
	})

	socket.on('disconnect', function(){
		console.log('User disconnected')
	})
})

http.listen(3000, function() {
  console.log('listening on localhost:3000')
})