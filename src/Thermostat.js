function Thermostat() {
  var DEFAULT_TEMPERATURE = 20;
  this.MAX_TEMP_ERROR = "Cannot increase temperature, you are at max temp for mode";
  this.MIN_TEMP_ERROR = "Cannot decrease temperature, minimum is 10 degrees";
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this.powerSaving = true;
  this.colorDisplay = "Yellow";
  this.currentTemp = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.upTemp = function() {
  if (this.atMax()) throw Error(this.MAX_TEMP_ERROR);
  this.currentTemp += 1;
};

Thermostat.prototype.downTemp = function() {
  if (this.atMin()) throw Error(this.MIN_TEMP_ERROR);
  this.currentTemp -= 1;
};

Thermostat.prototype.powerSavingSwitch = function() {
  if (this.powerSaving === true) {this.powerSaving = false;
  this.MAX_TEMPERATURE = 32;}
  else {this.powerSaving = true;
  this.MAX_TEMPERATURE = 25;}
};

Thermostat.prototype.colorDisplayCheck = function() {
  if (this.currentTemp < 18) {this.colorDisplay = "Green";
  }
  else if (this.currentTemp > 25) {this.colorDisplay = "Red";
  }
  else {this.colorDisplay = "Yellow";}
};

Thermostat.prototype.resetTemp = function() {
  this.currentTemp = 20;
};

Thermostat.prototype.atMax = function() {
  return this.currentTemp === this.MAX_TEMPERATURE;
};

Thermostat.prototype.atMin = function() {
  return this.currentTemp === this.MIN_TEMPERATURE;
};
