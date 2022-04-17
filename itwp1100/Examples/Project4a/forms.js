"use strict"; // interpret document contents in JavaScript strict mode

function header () {
document.write("<div style='text-align: center;'>");
document.write("<a href='index.htm'>Computer Components and You</a>-<a href='parts.html'>The Parts of a Computer</a>-<a href='assembly.html'>How The Components Fit Together</a>-<a href='temperatures.html'>The Temperature of Each Component</a>");
document.write("</div>");
}

function emptyForm() { // prevents an empty field from being submitted
    var x = document.forms["signUp"]["fname"].value;
    	if (x == "") {
        	alert("First Name must be filled out");
        	return false;
    	}
		 var x = document.forms["signUp"]["lname"].value;
    	if (x == "") {
        	alert("Last Name must be filled out");
        	return false;
    	}
	var y = document.forms["signUp"]["email"].value;
		if (y == "") {
			alert("Email must be filled out");
			return false;
		}
	var z = document.forms["signUp"]["phone"].value;
		if (z == "") {
			alert("Please enter a phone number");
			return false;
		}
	if (document.getElementById("cityselect").value == "choose") {
		alert("Please select a city");
		return false;
	}
	var x = document.forms["signUp"]["phone"].value; // check phone number field for numbers
  		if (isNaN(x)) {
    		alert("Must input numbers");
    		return false;
  	}
}