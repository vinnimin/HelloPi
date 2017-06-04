const     express = require("express")
        , app = express()
        , server = require("http").createServer(app)
        , io = require("socket.io").listen(server)
        , nodemailer = require("nodemailer")
        //, board = require("./hardware-controller.js");

var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
         io: new Raspi()
});

exports.hello = function (buf) {
    var comando = buf.toString().toLowerCase();
    if(comando === 'alô pai' || comando === 'hello pai' || comando === 'hello' || comando === 'hello kitty' || comando === 'alô pizza' || comando === 'jalopy'){
    console.log("capturei");
    return io.sockets.emit('callPi');
    }
}

exports.ativar = function (buf) {
    var comando = buf.toString().toLowerCase();
    if(comando === 'ativar' || comando === 'ativa'){
	var five = require("johnny-five");
        var Raspi = require("raspi-io");
        var board = new five.Board({
	     io: new Raspi()
        });
    }
}

//função do led
board.on("ready", function(){
	var led = new five.Led("P1-13");
	exports.commandLed = function (buf) {
	    var comando = buf.toString().toLowerCase();
	        if(comando === 'acender luz' || comando === 'acender a luz' || comando === 'acender led' || comando === 'acender o led') {
	       	 	led.on();
	     	}else if(comando === 'apagar led' || comando === 'apagar o led' || comando === 'apagar luz' || comando === 'apagar a luz'){
			led.off();
		}
	}
});


//função de email
var transporte = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'datanatoor@gmail.com',
    pass: ''
  }
});

var email = {
  from: 'HelloPi',
  to: 'victor.henrique.apolonio@gmail.com', //anselmocouto@hotmail.com
  subject: 'Comando de voz',
  html: '<strong>Boa noite professor.</strong>'
};

exports.sendMail = function(buf){
  if(buf.toString().toLowerCase() == "enviar e-mail"){
    console.log('alou');
    transporte.sendMail(email, function(err, info){
      if(err)
      throw err;

      console.log('Email enviado! Leia as informações adicionais: ', info);
    });
  }
}
