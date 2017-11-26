const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {

    // Create a new `photoresistor` hardware instance.
    const photoresistor = new five.Sensor("A0");
    const led = new five.Led(9);

    // Inject the `sensor` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        pot: photoresistor
    });

    // "data" get the current reading from the photoresistor
    photoresistor.on("data", function() {
        this.value < 600 ? led.off() : led.on();
    });
});
