// Demonstrates how to format a number to have 
// at least one digit after decimal point. Not localized. 

function toNumberString(num) { 
  if (Number.isInteger(num)) { 
    return num + ".0"
  } else {
    return num.toString(); 
  }
}

// Input  Output
// 3      "3.0"
// 3.4567 "3.4567"