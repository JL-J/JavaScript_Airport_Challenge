describe ('Plane', function() {

  var plane = new Plane

  it("can return it's landed status and it defaults to false", function() {
    expect(plane.isLanded()).toBe(false);
  });
  it("can land and it's landed status changes to true", function() {
    plane.land()
    expect(plane.isLanded()).toBe(true);
  });
  it("can takeoff and it's landed status changes to false", function() {
    plane.takeoff()
    expect(plane.isLanded()).toBe(false);
  });

})
