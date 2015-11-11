$( document ).ready(function() {

thermostat = new Thermostat();

$("#current-temp").prepend(thermostat.currentTemp);
$("#psm").prepend(thermostat.powerSaving);

$(document).on("click", "#up-temp", function() {
  thermostat.upTemp();
  $("#current-temp").replaceWith("<span id='current-temp'>" + thermostat.currentTemp + "</span>");
  console.log(thermostat.currentTemp);
});

$(document).on("click", "#down-temp", function() {
  thermostat.downTemp();
  $("#current-temp").replaceWith("<span id='current-temp'>" + thermostat.currentTemp + "</span>");
  console.log(thermostat.currentTemp);
});

$(document).on("click", "#reset-temp", function() {
  thermostat.resetTemp();
  $("#current-temp").replaceWith("<span id='current-temp'>" + thermostat.currentTemp + "</span>");
  console.log(thermostat.currentTemp);
});

$(document).on("click", "#power-switch", function() {
  thermostat.powerSavingSwitch();
  $("#psm").replaceWith("<span id='psm'>" + thermostat.powerSaving + "</span>");
  console.log(thermostat.powerSaving);
});


});
