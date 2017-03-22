var nodemailer = require('nodemailer');

var transporte = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'datanatoor@gmail.com',
    pass: 'datanatoor@natoor'
  }
});

var email = {
  from: 'HelloPi',
  to: 'victor.henrique.apolonio@gmail.com', //anselmocouto@hotmail.com
  subject: 'Comando de voz',
  html: '<strong>Boa noite professor.</strong>'
};

this.enviarEmail = function(comando){
  if(comando == "enviar e-mail"){
    console.log('alou');
    transporte.sendMail(email, function(err, info){
      if(err)
      throw err;

      console.log('Email enviado! Leia as informações adicionais: ', info);
    });
  }
}
