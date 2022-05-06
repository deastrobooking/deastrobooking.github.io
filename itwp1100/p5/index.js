/*
JavaScript 6th Edition
Project 3

Author: Randolph Chabot 
Date:   4/15/2022

Filename: contact.html

*/

var password = "12345"

function passcheck() {
    if(document.getElementById('pass1').value =! password){
        alert('Wrong Password Try Again')
        return false;
    }

    if(document.getElementById('pass1').value == password) {
        alert('Correct Password. Click Ok to enter Webpage')
        return true;
    }
}