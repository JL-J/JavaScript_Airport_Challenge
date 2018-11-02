function Weather() {

};

Weather.prototype.isStormy = function() {
  isWeatherStormy = [true, false]
  answer = isWeatherStormy[Math.floor(Math.random() * isWeatherStormy.length)];
  return answer;
};
