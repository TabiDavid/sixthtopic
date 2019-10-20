var elementsp = document.getElementsByTagName("p");
var elementsb = document.getElementById("Second");


var element = document.createElement("h2");
var content = document.createTextNode("What important is learn Grammar");
element.appendChild(content);
element.setAttribute("align", "center");
document.getElementById("second").appendChild(element);