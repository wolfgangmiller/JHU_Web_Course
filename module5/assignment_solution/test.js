document.addEventListener('DOMContentLoaded',
  function (event) {
    // Retrieve JSON data on page load
    var self = this;
    const url = 'http://127.0.0.1:5500/module5/assignment_solution/data/sandwiches.json';
    // call server to get name from text file
    //  initialize a new XMLHttpRequest() method
    const data = new XMLHttpRequest();
    // specify the URL endpoint and HTTP GET method  
    data.open("GET", url);
    // Send request
    data.send(null);

    data.onreadystatechange = function () {
      // XMLHttpRequest.readyState returns 4 
      // Unsent = 0 The XMLHttpRequest client has been created, but the open() method hasn't been called yet.
      // Opened = 1 open() method has been invoked.
      // Headers_Received = 2 Send() has been called and the response headers have been received.
      // Loading = 3 Response's body is being received. 
      // Done = 4 = Operation complete
      if (this.readyState == 4  && this.status == 200) {
        // Parse the JSON string
        var menuData = JSON.parse(this.responseText);
        console.log(menuData);
        displaySandwiches(menuData);
        
      }
    };
  } 
);



function displaySandwiches(data) {
  // Display information about the chicken sandwich
  
  console.log(data);

  document.querySelector('#item-name').innerHTML = `<h2>Sandwich is ${data.Sandwiches[0].Name}!</2>`;

  document.querySelector('#item-descr').innerHTML = `${data.Sandwiches[0].Description}`;

  document.querySelector('#item-img').innerHTML = `<img src="${data.Sandwiches[0].ImageURL}" alt="Fried Chicken Sandwich">`;

  document.querySelector('#item-price').innerHTML = `Price: ${data.Sandwiches[0].Price}`;

};


