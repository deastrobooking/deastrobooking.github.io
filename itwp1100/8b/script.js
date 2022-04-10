/*
      JavaScript 6th Edition
      Chapter 8
      Hands-on Project 8-4
      Author: Randolph Chabot
      Date:   4/7/22
      Filename: index.html
*/
//__--__--__ Declaring a variable in scrict mode. Variable Declared as an empty array. 
'use strict';
var list  = [];
//___________________________________________________________________________________
//Function Loops Through <li> elements removes them. 
// Then Loops throught the list array and fro each array element it creates a new li element.
// It then generates the content of that element using the current array element alo0ng with a 
// span element to create the "first" button. Then creates event listener. 

function generateList() {
    var listItems = document.getElementsByTagName("li");
    for (var i = listItems.length - 1; i >= 0; i--) {
        document.getElementsByTagName("ol")[0].
            removeChild(listItems[i]);
    }
    for (var i = 0; i < list.length; i++) {
        var newItem = "<span class='first'>first</span>" + list[i];
        var newListItem = document.createElement("li");
        newListItem.innerHTML = newItem;
        document.getElementsByTagName("ol")[0].
            appendChild(newListItem);
        var firstButtons = document.querySelectorAll(".first");
        var lastFirstButton = firstButtons[firstButtons.length - 1];
        if (lastFirstButton.addEventListener) {
            lastFirstButton.addEventListener("click",
                moveToTop, false);
        } else if (lastFirstButton.attachEvent) {
            lastFirstButton.attachEvent("onclick", moveToTop);
        }
    }
}
// __________________________________________________________________________________
// uses push() method to adds the value in the text box to the end of the list array. 
// returns focus to text box, clears its value, then calls generateList()

function addItem() {
    var newItem = document.getElementById("newItem");
    list.push(newItem.value);
    newItem.focus();
    newItem.value = "";
    generateList();
}
// 1.func takes parameter (evt) creates variables that reference collection of <li> elements 
// and the parent <li> element of the "first" button. 2. Then checks using for and search() method
// to check each value in the "list" array against content of parent <li> element 
// 3. Uses splice() method to remove array el. from the array and assign it to a variable. 
// 4. Then uses unshift() to add var as a new el. to start of []  
// 5. Then calls generateList() reacreate list based on order.

function moveToTop(evt) {
    if (evt === undefined) { // uses ===  strict comparison operator. 
        evt = window.event;
    }
    var callerElement = evt.target || evt.srcElement;
    var listItems = document.getElementsByTagName("li");
    var parentItem = callerElement.parentNode;
    for (var i = 0; i < list.length; i++) {
        if (parentItem.innerHTML.search(list[i]) !== -1) {
            var itemToMove = list.splice(i, 1);
            list.unshift(itemToMove);
        }
    }
    generateList();
}

// Creates Event Listener. 
function createEventListener() {
    var addButton = document.getElementById("button");
    if (addButton.addEventListener) {
        addButton.addEventListener("click", addItem, false);
    } else if (addButton.attachEvent) {
        addButton.attachEvent("onclick", addItem);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}