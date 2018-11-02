function Airport(capacity = 5) {
  this.capacity = capacity
  this.hanger = []
};

Airport.prototype.isFull = function() {
  return (this.hanger.length === this.capacity) 
};
