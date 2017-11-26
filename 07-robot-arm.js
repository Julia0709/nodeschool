const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function() {

// Create a new `potentiometer` hardware instance.
const potentiometer = new five.Sensor('A2');
const servo = new five.Servo(9);

    // Inject the `sensor` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        pot: potentiometer
    });

    // 'data' get the current reading from the potentiometer
    potentiometer.on('data', function() {
        // Controll robot arm
        const position = five.Fn.map(this.value, 0, 1023, 0, 179);
        servo.to(position);
    });
});
