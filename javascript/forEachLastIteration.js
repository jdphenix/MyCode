// This is an example that shows how to execute differently 
// when the last index of a forEach call is reach. 

arr = [1, 2, 3]; 

arr.forEach(function(i, idx, array){
   if (idx === array.length - 1){ 
       console.log("Last callback call at index " + idx + " with value " + i ); 
   }
});