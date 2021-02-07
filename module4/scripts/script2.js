// Create fake namespace
(function (window) {
  var bettyGreeter = {};
  bettyGreeter.name = 'Betty';
  var greeting = 'Hi'
  bettyGreeter.sayHi = function () {
  console.log(`${greeting} ${bettyGreeter.name}`);
}
window.bettyGreeter = bettyGreeter;
})(window);
