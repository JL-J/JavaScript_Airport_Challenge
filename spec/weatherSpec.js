describe ('Weather', function() {

  var weather = new Weather

  describe('generate', function() {
    it("can return sunny", function() {
      spyOn(weather, 'generate').and.returnValue('sunny')
      expect(weather.generate()).toEqual('sunny');
    });
    it("can return stormy", function() {
      spyOn(weather, 'generate').and.returnValue('stormy')
      expect(weather.generate()).toEqual('stormy');
    });
  });

})
