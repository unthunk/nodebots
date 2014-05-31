var Spark = require("spark-io");
var board = new Spark({
  token: '',
  deviceId: ''
});

board.on("ready", function() {
  console.log("CONNECTED");
  // -----------------
  // Read temperature
  // -----------------

  // Create a variable that will store the temperature value
  var celsius = 0,
    farenheit = 0,
    voltage = 0;
  this.pinMode("A7", this.MODES.INPUT);

  this.analogRead("A7", function(data){
    voltage = (data * 3.3)/4095;
    celsius = (voltage - 0.5) * 100;
    farenheit = (celsius * 9 / 5) + 32;
    console.log(data, voltage, celsius, farenheit);
  });


});
