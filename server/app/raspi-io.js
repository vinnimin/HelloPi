var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
	 io: new Raspi()
});

board.on("ready", function() {
 	var led = new five.Led("P1-13");
	console.log('Ligando led')
 	led.on();
	setTimeout(function(){
		console.log('Apagando led')
		led.off()
	}, 5000)
  
});
