var   express = require('express')
	, StringDecoder = require('string_decoder').StringDecoder
	, decoder = new StringDecoder('utf8');

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

var command = function (buf){
	if(buf.toString() === 'Alô pai' || buf.toString() === 'hello' || buf.toString() === 'Hello Kitty' || buf.toString() === 'Alô Pizza')
		console.log('Oi :]');
}

io.sockets.on('connection', function (socket) {
	socket.on('command', function (data) {
		commandMenssage = data.value;
		
		var buf = new Buffer(commandMenssage);
		decoder.write(buf);
		command(buf);//.pipe(command);
		//buf.write(commandMenssage);
		//configurar para escreverconteudo do buffer na porta do dispositivo;
		
		console.log(buf.toString());
		io.sockets.emit('command', {value: commandMenssage});	
	});
	
	socket.emit('command', {value: commandMenssage});
});

console.log("Servidor disponivel");