// On button click, calls server to retrieve name from text file
// Displays name on page

document.querySelector('button').addEventListener('click', function () {
  var self = this;
  var name = '';

  // call server to get name from text file
  $ajaxUtils.sendGetRequest('../module5/data/name.txt', function (request) {
    self.name = request.responseText;

    console.log(`Within request: ${self.name}`);
    // update content selector with name
    // Because ajax is async everything must be in request call
    document.querySelector('#content').innerHTML = `<h2>Hi, my name is ${self.name}!`;
  });
});

