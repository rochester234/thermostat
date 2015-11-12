$( document ).ready(function() {

thermostat = new Thermostat();

  $("#current-temp").prepend(thermostat.currentTemp);
  $("#psm").prepend(thermostat.powerSaving);

  $('#up-temp').on('click', function() {
    thermostat.upTemp();
    $("#title").fadeOut(300);
    thermostat.colorDisplayCheck();
    $("#current-temp").replaceWith("<span id='current-temp'>" + thermostat.currentTemp + "</span>");
    $('#title').css('background-color', thermostat.colorDisplay);
    $("#title").fadeIn(300);
  });

  $('#down-temp').on('click', function() {
    thermostat.downTemp();
    $("#title").fadeOut(300);
    thermostat.colorDisplayCheck();
    $("#current-temp").replaceWith("<span id='current-temp'>" + thermostat.currentTemp + "</span>");
      $('#title').css('background-color', thermostat.colorDisplay);
    $("#title").fadeIn(300);
  });

  $('#reset-temp').on('click', function() {
    thermostat.resetTemp();
      thermostat.colorDisplayCheck();
    $("#current-temp").replaceWith("<span id='current-temp'>" + thermostat.currentTemp + "</span>");
      $('#title').css('background-color', thermostat.colorDisplay);
  });

  $('#power-switch').on('click', function(){
    thermostat.powerSavingSwitch();
    $("#psm").replaceWith("<span id='psm'>" + thermostat.powerSaving + "</span>");
  });

});
