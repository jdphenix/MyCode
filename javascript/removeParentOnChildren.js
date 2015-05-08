// Demonstrates one way to use the DOM to remove 
// parents based upon their children. 

window.addEventListener('load', function() {
    var projectDescriptions = document.querySelectorAll('tr.project-description'),
        projectDescriptions = Array.prototype.slice.call(projectDescriptions); 
    projectDescriptions.forEach(function(el) { 
        if (el.querySelector('span.verfied-badge')) { 
            el.parentNode.removeChild(el);
        }
    });
});