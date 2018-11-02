function Plane(weather = new Weather) {
  this._weather = weather;
  this._isLanded = false;
};

Plane.prototype.isLanded = function() {
  return this._isLanded;
};

Plane.prototype.land = function() {
  if (this.isStormy()) {
    throw "Can not land: Adverse weather conditions";
  } else {
  this._isLanded = !(this._isLanded);
  }
};

Plane.prototype.takeoff = function() {
  if (this.isStormy()) {
    throw "Can not takeoff: Adverse weather conditions";
  } else {
  this._isLanded = !(this._isLanded);
  }
};

Plane.prototype.isStormy = function() {
  return this._weather.isStormy();
};
