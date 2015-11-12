describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a #DEFAULT_TEMPERATURE of 20 degrees", function() {
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it("should have a #MAX_TEMPERATURE of 25 degrees", function() {
    expect(thermostat.MAX_TEMPERATURE).toEqual(25);
  });

  it("should have a #power saving mode default on", function() {
    expect(thermostat.powerSaving).toEqual("ON");
  });

  describe("#powerSaving", function() {
    it("power saving can be turned off", function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSaving).toEqual("OFF");
    });

    it("when power saving turned off, changes max temp to 32", function() {
      thermostat.powerSavingSwitch();
      expect(thermostat.MAX_TEMPERATURE).toEqual(32);
    });
  });

  describe("#resetTemp", function() {

    it("resets #currentTemp to 20 degress", function() {
      thermostat.upTemp();
      thermostat.resetTemp();
      expect(thermostat.currentTemp).toEqual(20);
    });
  });

  describe("#colorDisplay", function() {

    it("display color green when temperature is less than 18", function() {
      for(i=1; i<4; i++) {
        thermostat.downTemp();
      }
      thermostat.colorDisplayCheck();
      expect(thermostat.colorDisplay).toEqual("green");
    });

    it("display color yellow when temperature is less than 25", function() {
      thermostat.colorDisplayCheck();
      expect(thermostat.colorDisplay).toEqual("yellow");
    });

    it("display color red when temperature is above 25", function() {
      thermostat.powerSavingSwitch();
      for(i=1; i<7; i++) {
        thermostat.upTemp();
      }
      thermostat.colorDisplayCheck();
      expect(thermostat.colorDisplay).toEqual("red");
    });
  });

  describe("#upTemp", function() {

    it("increases the #currentTemp by 1", function() {
      thermostat.upTemp();
      expect(thermostat.currentTemp).toEqual(21);
    });
    it("throws an error if you try to go above max temp", function() {
        for (i=1; i < 6; i++) {
          thermostat.upTemp();
        }
        expect(function() {thermostat.upTemp()}).toThrow(new Error (thermostat.MAX_TEMP_ERROR));
    });
  });

  describe("#downTemp", function() {

    it("decreases the #currentTemp by 1", function() {
      thermostat.downTemp();
      expect(thermostat.currentTemp).toEqual(19);
    });

    it("throws an alert if you try to go below min temp", function() {
        for (i=1; i < 11; i++) {
          thermostat.downTemp();
        }
        expect(function() {thermostat.downTemp()}).toThrow(new Error (thermostat.MIN_TEMP_ERROR));
    });
  });
});
