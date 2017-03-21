var socket = io.connect();
        socket.on('command', function (valor) {
          document.getElementById("inputMessage").value = valor.value;
          document.getElementById("outputText").innerHTML = valor.value;
        });

        function showValue(newValue)
        {
          document.getElementById("outputText").value = newValue;
          socket.emit('command', { value: newValue });
        }

window.addEventListener('DOMContentLoaded', function(){

    var btn_gravacao = document.querySelector('#btn_gravacao');

    var transcricao_audio = '';
    var esta_gravando = false;

    if(window.SpeechRecognition || window.webkitSpeechRecognition){
      var speech_api = window.SpeechRecognition || window.webkitSpeechRecognition;
      var recebe_audio = new speech_api();

      recebe_audio.continuous = false;
      recebe_audio.interimResults = false;
      recebe_audio.lang = "pt-BR";

      recebe_audio.onstart = function(){
        esta_gravando = true;
        btn_gravacao.innerHTML = 'Gravando... Parar Gravacao.';
      };

      recebe_audio.onend = function(){
        esta_gravando = false;
        btn_gravacao.innerHTML = 'Iniciar Gravacao';
      };

      recebe_audio.onresult = function(event){
        transcricao_audio = event.results[0][0].transcript;

        var resultado = transcricao_audio;

        document.getElementById('inputMessage').value = resultado;

        showValue(resultado);
       // console.log(resultado);
      }

      btn_gravacao.addEventListener('click', function(e){
        if(esta_gravando){
          recebe_audio.stop();
          return;
        }
        recebe_audio.start();

      }, false);

    }else{
      console.log('erro')
    }



  }, false);