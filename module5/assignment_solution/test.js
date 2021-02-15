// document.addEventListener('DOMContentLoaded',
//   function (event) {
//     var self = this;
//     var name = '';
//     // call server to get name from text file
//     $ajaxUtils.sendGetRequest('./data/sandwiches.json', function (request) {
//     self.data = request.JSON.parse() responseText;

//     console.log(`Within request: ${self.name}`);
    // update content selector with name
    // Because ajax is async everything must be in request call


var data = {
  "Sandwiches": [
    {
      "Name": "Fried Chicken Sandwich",
      "Description": "This Fried Chicken sandwich is THE BEST! It really doesn’t get much better than crispy and juicy fried chicken on a toasted bun with a smoky paprika sauce.",
      "ImageURL": "../assignment_solution/images/chicken.jpg",
      "Price": "$7.50"
    },
    {
      "Name": "French Dip Sandwich",
      "Description": "Try our French Dip sandwich with a mouthwatering jus! Stuffing fresh bread rolls with tender beef along with melted provolone cheese, then dipping it into a perfect au jus.",
      "ImageURL": "./images/chicken.jpg",
      "Price": "$9.50"
    },
    {
      "Name": "Cubano Sandwich",
      "Description": "Our Cubano sandwich is a combination of flavorful, juicy pork, Swiss cheese, pickles, mustard, and Cuban bread makes this dish an undeniable hit.",
      "ImageURL": "../mod5/assignment_solution/images/",
      "Price": "$8.50"
    }
  ]
}

console.log(data.Sandwiches[0].Name);

    document.querySelector('#item-name').innerHTML = `<h2>Sandwich is ${data.Sandwiches[0].Name}!</2>`;

    document.querySelector('#item-descr').innerHTML = `${data.Sandwiches[0].Description}`;

    document.querySelector('#item-img').innerHTML = `<img src="${data.Sandwiches[0].ImageURL}" alt="Fried Chicken Sandwich">`

    document.querySelector('#item-price').innerHTML = `Price: ${data.Sandwiches[0].Price}`
//   });

//   }
// );


// function sayHello(event) {
//   this.textContent = 'Said it';
//   let name = document.getElementById('name').value;
//   let title = document.querySelector('#title').textContent;

//   if (name.toLowerCase() === 'student') {
//     document.getElementById('content').innerHTML = `<h3>Hello ${title} ${name}!</h3>`;
//   } else {
//     document.getElementById('content').innerHTML = `<h3>Hello ${name}!</h3>`;
//   }
// }
// document.querySelector('button').addEventListener('click', sayHello);



// document.querySelector('button').addEventListener('click', function () {
//   var self = this;
//   var name = '';

//   // call server to get name from text file
//   $ajaxUtils.sendGetRequest('../module5/data/name.txt', function (request) {
//     self.name = request.responseText;

//     console.log(`Within request: ${self.name}`);
//     // update content selector with name
//     // Because ajax is async everything must be in request call
//     document.querySelector('#content').innerHTML = `<h2>Hi, my name is ${self.name}!`;
//   });
// });
