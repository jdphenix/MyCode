window.onload = function() {
	var mapping = {};
	mapping['GDS'] = 'Good Domestic Standard';
	mapping['PHP'] = 'Personal Home Page';
	mapping['JS'] = 'JavaScript';

	document.getElementById('replace').addEventListener('click', function(evt) {

	  var newString = (function(map, oldString) {
		Object.keys(map).forEach(function(key) {
		  oldString = oldString.replace(new RegExp('\\b' + key + '\\b', 'g'), map[key]);
		});
		return oldString;
	  }(mapping, document.getElementById('input').value));

	output.value = newString;

	});
}