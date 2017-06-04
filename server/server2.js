const     express = require("express")
  		, app = express()
  		, server = require("http").createServer(app)
 		, io = require("socket.io").listen(server)
 		, StringDecoder = require("string_decoder").StringDecoder
 		, decoder = new StringDecoder("utf8")
 		, commandList = require("./app/command-list.js");
 
 //Inicializando servidor;
 console.log("Abrindo servidor");
 server.listen(8000);
 console.log("Servindo página");
 app.use(express.static("public")); 
 
 //Processamento
 var commandMenssage = 'Diga o comando';
 
 io.sockets.on('connection', function (socket) {
	socket.on('command', function (data) {
		commandMenssage = data.value;
		var buf = new Buffer(commandMenssage);
		decoder.write(buf);
		console.log(buf.toString().toLowerCase());
		commandList.hello(buf);
		commandList.sendMail(buf);
		commandList.commandLed(buf);
		commandList.ativar(buf);
		io.sockets.emit('command', {value: commandMenssage});
	});
	socket.emit('command', {value: commandMenssage});
 });
 console.log("Servidor disponivel");
