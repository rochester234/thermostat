describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a #DEFAULT_TEMPERATURE of 20 degrees", function() {
    expect(thermostat.currentTemp).toEqual(20);
  });

  describe("#upTemp", function() {

    it("increases the #currentTemp by 1", function() {
      thermostat.upTemp();
      expect(thermostat.currentTemp).toEqual(21);
    });
  });

  describe("#downTemp", function() {

    it("decreases the #currentTemp by 1", function() {
      thermostat.downTemp();
      expect(thermostat.currentTemp).toEqual(19);
    });
  });


});
