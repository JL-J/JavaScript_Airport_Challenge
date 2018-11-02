describe ('Weather', function() {

  var weather = new Weather

  describe('generate', function() {
    it("can return false if the weather is sunny", function() {
      spyOn(weather, 'isStormy').and.returnValue(false)
      expect(weather.isStormy()).toEqual(false);
    });
    it("can return true if the weather is stormy", function() {
      spyOn(weather, 'isStormy').and.returnValue(true)
      expect(weather.isStormy()).toEqual(true);
    });
  });

})
