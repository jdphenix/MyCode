// Demonstrates broken JavaScript code that accidently creates a 
// closure in a loop - with my comments added. 

for(i=0;i<16;i++){
d3.select('#photo'+i).on("mouseover", function(d){
        d3.select('#photo').selectAll('img').remove();
        d3.select('#photo').append("img")
                .attr("src","/path/images/" + i + ".jpeg" ) // Accesses `i` from closure, 
                                                            // will always be last value
                                                            // that met `i < 16`
                .attr("x", -8)
                .attr("y", -8)
                .attr("width","500px")                  
                .attr("height","500px"); 
});
}

// Fixed version - because it is passed into functions as parameters, 
// the loop variable is the expected value. 

var populateCell = function(i) { 
  d3.select('#photo').selectAll('img').remove(); 
  d3.select('#photo').append('img')
      .attr('src', '/path/images/' + i + '.jpeg')
      .attr('x', -8)
      .attr('y', -8)
      .attr('width', '500px')
      .attr('height', '500px');
};

var selectCell = function(i) { 
  return d3.select('#photo' + i); 
}; 

var i = 0; // explicit definition of `i`
for (; i < 16; i++) { 
  selectCell(i).on('mouseover', populateCell(i)); 
}