function Thermostat() {
  var DEFAULT_TEMPERATURE = 20;
  this.MAX_TEMPERATURE = 25;
  this.powerSaving = true;
  this.currentTemp = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.upTemp = function() {
  if (this.currentTemp === this.MAX_TEMPERATURE) throw new Error("Cannot increase temperature, you are at max temp for mode");
  this.currentTemp += 1;
};

Thermostat.prototype.downTemp = function() {
  if (this.currentTemp === 10) throw new Error("Cannot decrease temperature, minimum is 10 degrees");
  this.currentTemp -= 1;
};

Thermostat.prototype.powerSavingSwitch = function() {
  if (this.powerSaving === true) {this.powerSaving = false;
  this.MAX_TEMPERATURE = 32;}
  else {this.powerSaving = true;
  this.MAX_TEMPERATURE = 25;}
};
