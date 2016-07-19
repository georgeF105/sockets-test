var socket = io();

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var val = document.getElementById('message').value
	socket.emit('SEND_MSG',val)  
})

socket.on('SEND_MSG', function(msg) {
	var liMsg = document.createElement("LI")
	console.log('liMsg',liMsg)
	liMsg.appendChild(document.createTextNode(msg))
	// console.log('liMsg',liMsg)
	document.getElementById('messages').appendChild(liMsg)

})