

var message = document.createElement("h2");
var nodo = document.createTextNode("What important is learn Grammar as one of the most important thing ok");

message.appendChild(nodo);
document.body.appendChild(message);

var second = document.createElement("h3");
var figure = document.createTextNode("Something that I do not Understand");

second.appendChild(figure);
document.body.appendChild(second);

//var test = document.getElementById("hello");
//test.appendChild(second);

var newone = document.createElement("p");
var hellone = document.createTextNode("We are trying again");

newone.appendChild(hellone);

var element = document.getElementById("hello");
var child = document.getElementById("green");
element.insertBefore(newone, child);