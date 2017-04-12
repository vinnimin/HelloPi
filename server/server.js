var   express = require('express')
	, StringDecoder = require('string_decoder').StringDecoder
	, decoder = new StringDecoder('utf8');

	  app = express();
	  server = require('http').createServer(app);
	  io = require('socket.io').listen(server);
		email = require('./emailService.js');

//biblioteca para escrever na porta
//var SerialPort = require("serialport");
//var serialPort = new SerialPort();

console.log("Abrindo servidor");
server.listen(8080);

console.log("Servindo página");
app.use(express.static('public'));

var commandMenssage = 'Diga o comando';



io.sockets.on('connection', function (socket) {

var command = function (buf){
	var comando = buf.toString().toLowerCase();
	if(comando === 'Alô pai' || comando === 'hello pai' || comando === 'hello' || comando === 'Hello Kitty' || comando === 'Alô Pizza' || comando === 'jalopy'){
		io.sockets.emit('callPi');
	}
}
		socket.on('command', function (data) {
		commandMenssage = data.value;

		email.enviarEmail(commandMenssage);
		var buf = new Buffer(commandMenssage);
		decoder.write(buf);
		//command(buf);

			//console.log('Oi :]');
			command(buf);


		//.pipe(command);
		//buf.write(commandMenssage);
		//configurar para escreverconteudo do buffer na porta do dispositivo;

		console.log(buf.toString());
		io.sockets.emit('command', {value: commandMenssage});
	});

	socket.emit('command', {value: commandMenssage});

	socket.emit('command', {value: commandMenssage});

});

console.log("Servidor disponivel");
