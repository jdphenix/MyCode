// Function which returns true if any passed parameter matches the first, otherwise
// returns falsy. 

function assertAnyEquals(value) {
      "use strict";
      var args = new Array(arguments.length);
      for (var i = 1; i < arguments.length; i++) { 
          args[i] = arguments[i];
      } 

      return args.some(function(arg) { 
        if (value === arg) { 
          return true;
        }
      });
    }
	
	
// and then later to use: 

if (assertAnyEquals(location.href, "www.google.com", "www.jsfiddle.net")) { 
    // do stuff 
}