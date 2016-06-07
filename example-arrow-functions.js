var names = ['Andrew', 'Oscar', 'Roger'];

names.forEach(function(name) {
  console.log('forEach', name);
});
//use arrow functions inplace of anonymous functions
names.forEach((name) => {
  console.log('arrowFunc', name);
});
//simpler version
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Justin'));

var person = {
  name: 'Andrew',
  greet: function () {
    names.forEach((name) => {  //arrow function doesnt update the this keyword
      console.log(this.name + ' says hi to ' + name);  //this still refers to person object
    });
  }
};

person.greet();

//challenge Area
function add(a, b) {
  return a + b;
}

//addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

//add Expression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));


// console.log(add(1,3));
// console.log(add(9,0));
