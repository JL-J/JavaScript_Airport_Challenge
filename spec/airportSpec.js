describe ('Airport', function() {

  var airport = new Airport

  describe('hanger', function() {
    it("on creation the hanger is not full", function() {
      expect(airport.isFull()).toBe(false);
    });
    it("accepts 5 planes in its hanger and then is full", function() {
      for (var i=0; i<5; i++) airport.hanger.push('plane');
      expect(airport.isFull()).toBe(true);
    });
    it("it's default capacity can be overwritten to allow more planes to land", function(){
      largeAirport = new Airport(10);
      for (var i=0; i<10; i++) largeAirport.hanger.push('plane');
      expect(largeAirport.isFull()).toBe(true);
    });
  });

})
