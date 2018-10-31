function Plane() {
  this._isLanded = false;
};

Plane.prototype.isLanded = function() {
  return this._isLanded;
};

Plane.prototype.land = function() {
  this._isLanded = !(this._isLanded);
};

Plane.prototype.takeoff = function() {
  this._isLanded = !(this._isLanded);
};
