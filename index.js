

/*var message = document.createElement("h2");
var nodo = document.createTextNode("What important is learn Grammar as one of the most important thing ok");

message.appendChild(nodo);
document.body.appendChild(message);*/

/*var second = document.createElement("h3");
var figure = document.createTextNode("Something that I do not Understand");

second.appendChild(figure);
document.body.appendChild(second);*/
//<script>

function heading2(){
    var message = document.createElement("h2");
var nodo = document.createTextNode("What important is learn Grammar as one of the most important thing");

message.appendChild(nodo);
document.getElementById("titletwo").appendChild(message);

}

function heading3(){

    var second = document.createElement("h3");
var figure = document.createTextNode("Something that I do not Understand");

second.appendChild(figure);
document.getElementById("titlethree").appendChild(second);


}


const myList = document.getElementById('myList');
const pearsItem = document.getElementById('pearsItem');

console.log(myList);
console.log(pearsItem);

const orangesItem = document.createElement('p');
orangesItem.textContent = '2._What is happening here with our language?';

myList.insertBefore(orangesItem, pearsItem);




var stepone = document.createElement('li');
var vocabulary = document.createTextNode('Vocabulary');
stepone.appendChild(vocabulary);

var element = document.getElementById('languageAcqui');
var child = document.getElementById('stepfour');
element.insertBefore(stepone, child);


function erase(){

    var desappear = document.getElementById('stepone');
    
    desappear.remove();
}
//</scritp>
