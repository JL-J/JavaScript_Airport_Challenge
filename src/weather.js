function Weather() {

};

Weather.prototype.generate = function() {
  typesOfWeather = ['sunny', 'stormy']
  answer = typesOfWeather[Math.floor(Math.random() * typesOfWeather.length)];
  return answer.toString();
};
