// Demonstrates partial application of a function in JavaScript

function add(a, b) {
  return a + b;
}

if (!Function.prototype.partial) { 
    Function.prototype.partial = function() { 
        var slice = Array.prototype.slice, 
            args = new Array(arguments.length), 
            that = this;
        for (var i = 0; i < args.length; i++) { 
            args[i] = arguments[i]; 
        } 
        return function() { 
            return that.apply(null, args.concat(slice.apply(arguments))); 
        }
    }; 
}

var example = add.partial(4);
console.log(example(10)); // output 14
console.log(example(20)); // output 24