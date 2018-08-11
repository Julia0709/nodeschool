const five = require('johnny-five');
const board = new five.Board();
board.on('ready', function () {

    const servo = new five.Servo(9);
    servo.sweep();
	
    // Demonstrate motor stop in 3 seconds
    board.wait(3000, function() {
      servo.stop();
      servo.center();
    });

});
