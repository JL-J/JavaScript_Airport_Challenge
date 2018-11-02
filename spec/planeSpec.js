describe ('Plane', function() {

  var weatherSpy = jasmine.createSpyObj('weatherSpy', ['isStormy']);
  var airportSpy = jasmine.createSpyObj('airportSpy', ['isFull']);
  var plane = new Plane(weatherSpy)

  describe('landed status in good weather', function() {
    beforeEach(function() {
     weatherSpy.isStormy.and.returnValue(false);
    });
    it("can return it's landed status and it defaults to false", function() {
      expect(plane.isLanded()).toBe(false);
    });
    it("can land and it's landed status changes to true", function() {
      plane.land(airportSpy)
      expect(plane.isLanded()).toBe(true);
    });
    it("can takeoff and it's landed status changes to false", function() {
      plane.takeoff()
      expect(plane.isLanded()).toBe(false);
    });
    it("can not land when the airport is full", function() {
      airportSpy.isFull.and.returnValue(true);
      expect(function() {plane.land(airportSpy);}).toThrow("Can not land: Airport is full");
    });
  });

  describe('plane in stromy weather', function() {
    beforeEach(function(){
     weatherSpy.isStormy.and.returnValue(true);
    });
    it("can not land when the weather is stormy", function() {
      expect(function() {plane.land(airportSpy);}).toThrow("Can not land: Adverse weather conditions");
    });
    it("can not takeoff when the weather is stormy", function() {
      expect(function() {plane.takeoff();}).toThrow("Can not takeoff: Adverse weather conditions");
    });
  });

})
