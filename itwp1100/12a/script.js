/*  JavaScript 6th Edition
    Chapter 12
    Hands-on Project 12-1

    Author: Randolph Chabot 
    Date:   05/2/2022

    Filename: script.js
*/

"use strict";
function display(event) {
	$(event.currentTarget).next().fadeIn("slow");
}
$("h3").click(display);