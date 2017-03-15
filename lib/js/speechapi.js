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
			btn_gravacao.innerHTML = 'Gravando';
		};

		recebe_audio.onend = function(){
			esta_gravando = false;
			btn_gravacao.innerHTML = 'Iniciar Gravacao';
		};

		recebe_audio.onresult = function(event){
			console.log(event);
		}

		btn_gravacao.addEventListener('click', function(e){
			recebe_audio.start();
		}, false);

	}else{
		console.log('fodeu')
	}



}, false);