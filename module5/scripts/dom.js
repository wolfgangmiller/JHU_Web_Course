// Can use life-cycle event of page assign events before any scripts ore css loads. Can move script to head.
// This seems similar to defer
// document.addEventListener('DOMContentLoaded',
//   function (event) {
//     function sayHello(event) {
//       this.textContent = 'Said it';
//       let name = document.getElementById('name').value;
//       let title = document.querySelector('#title').textContent;
    
//       if (name.toLowerCase() === 'student') {
//         document.getElementById('content').innerHTML = `<h3>Hello ${title} ${name}!</h3>`;
//       } else {
//         document.getElementById('content').innerHTML = `<h3>Hello ${name}!</h3>`;
//       }
//     }
//     document.querySelector('button').addEventListener('click', sayHello);
//   }
// )


// Getting HTML element
console.log('Getting HTML element\n');
console.log(document.getElementById('title'));

// Function 1
// console.log('Function that gets input and displays greeting in console');
// function sayHello() {
//   console.log(`Hello ${document.getElementById('name').value}!`);
// }

// Function 2
// console.log('Function that gets input and displays greeting on page');
// function sayHello() {
//   let name = document.getElementById('name').value;
//   document.getElementById('content').textContent = 'Hello ' + name +'!';
// }
// Function 3
// console.log('Function that gets input and displays greeting on page as h3 tag');
// function sayHello() {
//   let name = document.getElementById('name').value;
//   document.getElementById('content').innerHTML = `<h3>Hello ${name}!</h3>`;
// }
console.log('Function that gets input checks name and displays greeting or greeting plus title on page as h3 tag');
function sayHello(event) {
  // The event argument is what triggered the event. In the case it's a mouse Event.
  console.log(event);
  // with event handler now point to button element due to listener,
  // can use 'this' to change properties of button.
  this.textContent = 'Said it';
  let name = document.getElementById('name').value;
  let title = document.querySelector('#title').textContent;

  if (name.toLowerCase() === 'student') {
    document.getElementById('content').innerHTML = `<h3>Hello ${title} ${name}!</h3>`;
  } else {
    document.getElementById('content').innerHTML = `<h3>Hello ${name}!</h3>`;
  }
}

// Note that when using the onclick events directly in the HTML, the event is in the global environment. Using the listener binds the event to the actual element execution environment


// Unobtrusive event binding
document.querySelector('button').addEventListener('click', sayHello);

// Alternately, use the onclick event as a property of the element.
// document.querySelector('button').onclick = sayHello;

// Create function that tracks X and Y coordinates of mouse movement
// only when shift key is pressed.
console.log('Also tracks X and Y coordinates of mouse movement only when shift key is pressed.');

document.querySelector('body').addEventListener('mousemove', 
  function (event) {
    if (event.shiftKey === true) {
      console.log(`x: ${event.clientX}`);
      console.log(`y: ${event.clientY}`);
    }
  }
);