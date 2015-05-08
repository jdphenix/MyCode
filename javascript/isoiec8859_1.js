// Determines if a given integer represents a character in the ISO/IEC 8859-126
// code space. 

function inIsoIec8859_1(code) {
  if (typeof code !== "number" || code % 1 !== 0) {
    throw Error("code supplied is not a integer type.")
  }

  if (code > 255 || code < 32 || (code > 126 && code < 160)) {
    return false;
  }
  return true; 
}

var isoLatinCodespace = "";

var code = 0;
for (; code < 255; code += 1) {
  if (inIsoIec8859_1(code)) {
    var current = String.fromCharCode(code);
    isoLatinCodespace = isoLatinCodespace + current;
  }
}