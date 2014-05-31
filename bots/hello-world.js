var Spark = require("spark-io");
var board = new Spark({
  token: '',
  deviceId: ''
});

board.on("ready", function() {
  console.log("CONNECTED");
  this.pinMode("D0", this.MODES.OUTPUT);

  var byte = 0;

  // This will "blink" the on board led
  setInterval(function() {
    this.digitalWrite("D0", (byte ^= 1));
  }.bind(this), 500);
});
