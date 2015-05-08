// This demonstrates using a js plain object as a associative array. 

var map = {}; 

function setFavorite(name, value) { 
    map[name] = value; 
}

// This function protects against overwriting previous values, if
// that is what is desired. 

function setFavorite(name, value) { 
    if (map[name]) { 
        throw new Error('Cannot insert duplicate value'); 
    }
    map[name] = value; 
}

// This shows how to iterate through the object 

Object.keys(map).forEach(function(key) { 
    var value = map[key]; 
    // do some useful work with the value 
}); 

// ----------------------------------------------------------------------------
// This shows a reasonable replacement for a long switch 

bookActions = {}; 

bookActions['path'] = function() { // or the real way you're loading these
    // other code to generate that you would have had in 
    // the switch case
    return 'some html'; 
}; 

// instead of 
book.forEach(function (getBook, i) {
  switch (getBook) {
  case path:
    string = 'some html';
    break;
  };
});