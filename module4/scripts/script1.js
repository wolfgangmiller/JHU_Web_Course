// Create fake namespace
// var mayaGreeter = {};
// mayaGreeter.name = 'Maya';
// mayaGreeter.sayHello = function () {
//   console.log(`Hello ${mayaGreeter.name}`);
// };

// Immediately Invoked Function Expressions (IIFEs)
(function (window) {                                // pass in window reference to global environment
  var mayaGreeter = {};                             // create object for fake namespace
  mayaGreeter.name = 'Maya';                        // associate variable with namespace
  var greeting = 'Hello'                            // using 'local' variable not in global namespace
  mayaGreeter.sayHello = function () {              // associate function with namespace
  console.log(`${greeting} ${mayaGreeter.name}`);
};
window.mayaGreeter = mayaGreeter;                   // pass fake namespace to global window environment
})(window);                                         // invoke function w/ window as argument