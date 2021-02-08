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
function sayHello() {
  let name = document.getElementById('name').value;
  let title = document.querySelector('#title').textContent;

  if (name.toLowerCase() === 'student') {
    document.getElementById('content').innerHTML = `<h3>Hello ${title} ${name}!</h3>`;
  } else {
    document.getElementById('content').innerHTML = `<h3>Hello ${name}!</h3>`;
  }

}