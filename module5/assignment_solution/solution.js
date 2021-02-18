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
        // Update html content w/ JSON data
        displaySandwich1(menuData.Sandwiches[0]);
        displaySandwich2(menuData.Sandwiches[1]);
        displaySandwich3(menuData.Sandwiches[2]);
        
      }
    };
  } 
);



function displaySandwich1(data) {
  // Display information about the chicken sandwich

  document.querySelector('#item-name-one').innerHTML = `${data.Name}`;

  document.querySelector('#item-descr-one').innerHTML = `${data.Description}`;

  document.querySelector('#item-img-one').innerHTML = 
  `<img src="${data.ImageURL}" alt="Fried Chicken Sandwich"> <div class="price-wrapper1" id="item-price-one">Price ${data.Price}</div>`;

  document.querySelector('#item-price-one').innerHTML = `Price: ${data.Price}`;
};

function displaySandwich2(data) {
  // Display information about the French Dip sandwich
  console.log(data);

  document.querySelector('#item-name-two').innerHTML = `${data.Name}`;

  document.querySelector('#item-descr-two').innerHTML = `${data.Description}`;

  document.querySelector('#item-img-two').innerHTML = 
  `<img src="${data.ImageURL}" alt="Fried Chicken Sandwich"> <div class="price-wrapper1" id="item-price-two">Price ${data.Price}</div>`;

  document.querySelector('#item-price-two').innerHTML = `Price: ${data.Price}`;
};

function displaySandwich3(data) {
  // Display information about the Cuban sandwich
  console.log(data);

  document.querySelector('#item-name-three').innerHTML = `${data.Name}`;

  document.querySelector('#item-descr-three').innerHTML = `${data.Description}`;

  document.querySelector('#item-img-three').innerHTML = 
  `<img src="${data.ImageURL}" alt="Fried Chicken Sandwich"> <div class="price-wrapper1" id="item-price-three">Price ${data.Price}</div>`;

  document.querySelector('#item-price-three').innerHTML = `Price: ${data.Price}`;
};


