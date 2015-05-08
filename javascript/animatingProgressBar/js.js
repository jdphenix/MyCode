window.onload = function() {
	// Move the progress bar to the given `n` over `overMs` ms. 
	function progressBarTo(id, n, overMs) {
	  function progressToStep(x) {
		var result = x;
		document.getElementById(id).style.width = result + "%";
		document.getElementById(id).innerHTML = result.toFixed(2) + "%";
	  }

	  var start;

	  function animateBar(timestamp) {
		if (!start) start = timestamp;

		var progress = timestamp - start;
		progressToStep((progress / overMs) * n);
		if (progress < overMs) {
		  requestAnimationFrame(animateBar);
		} else {
		  progressToStep(n);
		}
	  }

	  requestAnimationFrame(animateBar);
	}

	progressBarTo("bar1", 20, 5000);
	progressBarTo("bar2", 40, 2500);
	progressBarTo("bar3", 60, 1500);
	progressBarTo("bar4", 80, 750);
}