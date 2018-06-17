le.log(userInput);
var userAge = window.prompt("enter age");
console.log(userAge);
alert("Your name is "+userInput+" you are "+userAge+" years old");
var person = {
    first: 'John',
    last: 'Smith',  
    full: function() {
      console.log(this); // xjshint ignore:line
    }
  };