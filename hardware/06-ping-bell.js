// Input `$ echo 'message' | nc -cu 127.0.0.1 1337` after running your server.

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.bind(1337);
// server listening 0.0.0.0:1337

const five = require('johnny-five'),
board = new five.Board();

board.on('ready', function() {
    // Creates a piezo object and defines the pin to be used for the signal
    const piezo = new five.Piezo(8);

    server.on('message', (msg, rinfo) => {
        // Plays the same song with a string representation
        piezo.play({
            // song is composed by a string of notes
            // a default beat is set, and the default octave is used
            // any invalid note is read as 'no note'
            song: 'C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -',
            beats: 1 / 4,
            tempo: 100
        });
    });

    // Injects the piezo into the repl
    board.repl.inject({
        piezo: piezo
    });

});
