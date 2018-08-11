const five = require('johnny-five');

five.Board().on('ready', function() {

  const temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });

  let currentTemp = 0;
  temperature.on('change', function() {
    currentTemp = this.celsius;
  });

  // Sever
  const dnode = require('dnode');
  const server = dnode({
    getTemperature : function(callback) {
      callback(currentTemp);
    }
  });
  server.listen(1337);

});
