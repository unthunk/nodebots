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
  this.pinMode("D7", this.MODES.OUTPUT);
  this.pinMode("D5", this.MODES.OUTPUT);
  this.pinMode("D3", this.MODES.OUTPUT);

  var brightness = 0;

  // This will "blink" the on board led
  setInterval(function() {
    brightness = brightness === 0 ? 255 : 0;
    console.log(brightness);
    this.analogWrite("D7", brightness);
    this.analogWrite("D5", brightness);
    this.analogWrite("D3", brightness);
  }.bind(this), 500);
});
