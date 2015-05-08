// Demonstrates one way to dynamically load and use code 
// from the dynamically loaded code. 

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head') [0].appendChild(script);
script.onload = function () {
  /* jquery dependent code here */
  console.log($);
};