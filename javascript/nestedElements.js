// This code I wrote to answer a question about how to append 
// nested elements in HTML. 

function createdivs() {
  var i;
  for (i = 0; i < 10; i++) {
	divc = "<div>.container.content-rows";
	var divc = document.createElement("div");
	divc.classList.add("container");
	divc.classList.add("content-rows");
	divc.classList.add("prog list");
	divc.textContent = "I'm div #" + i;
	document.getElementById('contentdisplay').appendChild(divc);
	createNestedDivs(divc);
  }
}

function createNestedDivs(selector) {
  function appendToNode(node, content) {
	// ideally content would also be a Node, but for simplicity, 
	// I'm assuming it's a string. 
	var inner = document.createElement('span');
	inner.textContent = content;
	node.appendChild(inner);
  }

  if (selector instanceof Node) {
	appendToNode(selector, "inner");
	return;
  }

  var selected = Array.prototype.slice.call(document.querySelectorAll(selector));
  selected.forEach(function(el) {
	appendToNode(el, "inner");
  });
}