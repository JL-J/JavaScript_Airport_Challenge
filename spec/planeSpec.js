describe ('Plane', function() {

  var plane = new Plane

  it("can return it's landed status and it defaults to false", function() {
    expect(plane.isLanded()).toBe(false);
  });


})
