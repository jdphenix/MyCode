// Generates a color spectrum in JavaScript

// Depends upon this CSS

// .color {
//     height:12px;
//     display:inline-block;
// }

colorSpectrum = function(count) {
    if (count <= 0) { 
        throw new Error('Count must be atleast 1'); 
    }
    
    var h = 0,
        s = '75%', 
        l = '50%',
        a = 1,
        current = 0,
        colors = [],
        tohsla = function(h,s,l,a) {
            return 'hsla(' + h + ',' + s + ',' + l + ',' + a + ')';
        }
    
    while (current < count) {
        colors.push({
            h:h, 
            s:s, 
            l:l, 
            a:a
        });
        h += 360 / count; 
        current++; 
    }
    
    return {
        colors:colors.map(function(el) {
            return tohsla(el.h, el.s, el.l, el.a); 
        })
    }
};

var colors = colorSpectrum(24); 

colors.colors.forEach(function(color) { 
    var span = document.createElement('span'), 
        bodyWidth = parseInt(getComputedStyle(document.body).width, 10); 
    console.log(colors.colors.length);
    span.classList.add('color');
    span.style.backgroundColor = color; 
    span.style.width = bodyWidth / colors.colors.length + 'px'; 
    document.body.appendChild(span); 
}); 