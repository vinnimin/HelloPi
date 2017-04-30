const     express = require("express")
        , app = express()
        , server = require("http").createServer(app)
        , io = require("socket.io").listen(server)
        , nodemailer = require('nodemailer')
        //, email = require("../emailService.js");

exports.hello = function (buf) {
    var comando = buf.toString().toLowerCase();
    if(comando === 'alô pai' || comando === 'hello pai' || comando === 'hello' || comando === 'hello kitty' || comando === 'alô pizza' || comando === 'jalopy'){
    console.log("capturei");
    return io.sockets.emit('callPi');
    }
}


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