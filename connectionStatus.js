var WebSocket = require('ws');

// create socket
const connection = new WebSocket('ws://10.250.9.50:4567/checkers');

connection.onerror = function (error) {
	console.log(error);
};

connection.onmessage = function (event) {
	console.log(event.data);
};
