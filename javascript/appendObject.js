// Appends one object to another

var appendObject = function(obj, toAppend) { 
    Object.keys(toAppend).forEach(function(el) { 
        Object.defineProperty(obj, el, Object.getOwnPropertyDescriptor(toAppend,el)); 
    }); 
    return obj; 
}