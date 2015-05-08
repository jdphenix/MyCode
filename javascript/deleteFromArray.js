// Demonstrates how to delete from an array in JavaScript

var a = [1, 2, 3, 4, 5]; 
a.splice(2,1); // Being splice at element 2, deleting (and returning) 1 element
console.log(a); // outputs [1, 2, 4, 5]