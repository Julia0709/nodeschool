// 'use strict';

const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {

    const button = new five.Button(5);
    const led = new five.Led(9);

    // Button Event API
    button.on("press", function() {
        led.isOn ? led.off() : led.on();
    });

});
