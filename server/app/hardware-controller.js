const   five = require("johnny-five")
      , Raspi = require("raspi-io")

      , board = new five.Board(
          io: new Raspi()
      );

exports.startBoard = function () {
    board.on("ready", function() {
        var led = new five.Led("P1-13");
        led.off();
        console.log("Board inicializada e led instanciado");
        // led.on();
        exports.ledOff = function () {
            led.off();
            console.log("Entrei na função de desligar o led");
        }
        exports.ledOn = function () {
            led.on();
            console.log("Entrei na função de ligar o led");
        }
    });
}
