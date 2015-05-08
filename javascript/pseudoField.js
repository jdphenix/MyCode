// Demonstrates one way using jQuery to create a sort of "pseudo-label" inside a textbox. 

var Fields = {
  Seperator:":"
}

Fields.copyFieldName = function (element) {
  if (element.dataset.fieldname) {
    var seperatorIndex = Fields.findSeperator(element); 
    if (element.value.substring(0, seperatorIndex) !== element.dataset.fieldname) {
      var oldValue = element.value.substring(seperatorIndex + 1, element.value.length)
      element.value = element.dataset.fieldname + Fields.Seperator + oldValue;
    }
  }
};

Fields.findSeperator = function (element) {
  return element.value.indexOf(Fields.Seperator); 
}; 

Fields.selectInputValue = function (element) {
  if (element.type === "text") {
    if (element.setSelectionRange) {
      element.setSelectionRange(
        Fields.findSeperator(element) + 1, 
        element.value.length
      );
    } else if (element.createTextRange) {
      var range = element.createTextRange();
      range.moveStart("character", Fields.findSeperator(element) + 1);
      range.moveEnd("character", element.value.length);
      range.select();
    }
  }
};


$(document).ready(function () {
  $("input[data-fieldname]").each(function (index, element) {
    Fields.copyFieldName(element); 

    $(element).click(function () {
      Fields.copyFieldName(element);
      Fields.selectInputValue(this);
    });

    $(element).focusin(function (e) {
      e.preventDefault();
      Fields.copyFieldName(element);
      Fields.selectInputValue(this);
    }); 
  });
});