console.log('charAt() function to return first letter of name');

let name1 ='Maya';
let index = 0;

console.log(`The character at index ${index} is ${name1.charAt(index).toLowerCase()}`);

console.log('\nStep through array and display names');

let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var name in names) {
  console.log(`The name is: ${names[name]}`);
}

console.log('\nCheck if first letter is J or j ');

for (var name in names) {
  if  (names[name].charAt(0).toLowerCase() === 'j' ) {
    console.log(`The name is: ${names[name]}; We got a winner!`);
  } else {
    console.log(`The name is: ${names[name]}; Sorry try again!`);
  }
}