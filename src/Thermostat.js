function Thermostat() {
  var DEFAULT_TEMPERATURE = 20;
  this.currentTemp = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.upTemp = function() {
  this.currentTemp += 1;
};

Thermostat.prototype.downTemp = function() {
  this.currentTemp -= 1;
};
