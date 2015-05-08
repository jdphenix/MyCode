// Code demonstrating how to format a string to CSS

public static string ChangeValue(string name, string type, string value) {
     return String.Format("{0}\r\n{{\r\n    {1}:{2};\r\n}}", name, type, value);
}

// output: 
// body
// {
//     background-color:#ffffff;
// }

// Also noted this is possible to do with ExCSS
// https://github.com/TylerBrinks/ExCSS/

var parser = new Parser();
var stylesheet = parser.Parse(css);

var bodyBackgroundColor = stylesheet.StyleRules
  .FirstOrDefault(s => s.Selector.ToString() == "body")
  .Declarations
  .FirstOrDefault(d => d.Name == "background-color")
  .Term = new HtmlColor(255, 255, 255);

Console.WriteLine(stylesheet.ToString(true, 0));