// This code demonstrates how to get the current word (defined by surrounded by spaces)
// from a <textarea> when manipulating it. 

var $mytextarea = $('#mytextarea');

$mytextarea.keyup(function(e) {
  if (e.keyCode === 37 || e.keyCode === 39) {
    $("#current").text(getWord());
  }
});

function getWord() {
  var textarea = $mytextarea[0],
    pos = textarea.selectionStart,
    raw = textarea.value,
    start = pos,
    end = pos;

  while (raw.charAt(start) !== ' ' && start > 0) {
    start--;
  }
  while (raw.charAt(end) !== ' ' && end < raw.length) {
    end++;
  }

  return raw.substring(start, end);
}