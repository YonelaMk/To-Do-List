var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length; 
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 

    
    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("x"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", function() {
        ul.removeChild(li);
    });
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode == 13) { 
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);