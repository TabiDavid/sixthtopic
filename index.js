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


};


function parragraph(){

    const myList = document.getElementById('myList');
    const pearsItem = document.getElementById('pearsItem');
    
    console.log(myList);
    console.log(pearsItem);
    
    const orangesItem = document.createElement('p');
    orangesItem.textContent = '2._What is happening here with our language? we never know how important is learn a new language but is sure that all of us have chance to do it';
    
    myList.insertBefore(orangesItem, pearsItem);
};


function addTothelist(){
    var stepone = document.createElement('li');
    var vocabulary = document.createTextNode('Vocabulary');
    stepone.appendChild(vocabulary);
    
    var element = document.getElementById('languageAcqui');
    var child = document.getElementById('stepfour');
    element.insertBefore(stepone, child);
    
}

function erase(){

    var desappear = document.getElementById('stepone');

    desappear.remove();
}
