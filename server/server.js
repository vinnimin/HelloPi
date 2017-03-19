var express = require('express');
app = express();
server = require('http').createServer(app);
io = require('socket.io').listen(server);

//biblioteca para escrever na porta
//var SerialPort = require("serialport");
//var serialPort = new SerialPort();

console.log("Abrindo servidor");
server.listen(8080);

console.log("Servindo página");
app.use(express.static('public'));		

var commandMenssage = 'Diga o comando';

io.sockets.on('connection', function (socket) {
	socket.on('command', function (data) {
		commandMenssage = data.value;
		
		var buf = new Buffer(1);
		buf.write(commandMenssage);
		//configurar para escreverconteudo do buffer na porta do dispositivo;
		
		io.sockets.emit('command', {value: commandMenssage});	
	});
	
	socket.emit('command', {value: commandMenssage});
});

console.log("Servidor disponivel");