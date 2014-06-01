var fs = require('fs');
var file = __dirname + '/../config/config.json';
var config = {};
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
  config = JSON.parse(data);
});

var Spark = require("spark-io");
var board = new Spark({
  token: config.token,
  deviceId: config.deviceId
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
