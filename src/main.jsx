/* main entry point for the application */

var react = require("react");
var reactDom = require("react-dom");
var list = require("./components/List.jsx");


reactDom.render(<List />, document.getElementById("root"));
