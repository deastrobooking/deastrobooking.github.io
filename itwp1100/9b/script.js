/*JavaScript 6th Edition
      Chapter 9
      Hands-on Project 9-2

	Author: Randolph Chabot
      Date:  4/15/22

      Filename: script.js
	  */
	  
	  "use strict";
	  // Declaring function that saves username. ___________________________________________
	  function processCookie() {
		  document.cookie = "userame= " +
		  document.getElementById("usernameinput").value;
	  }
	  //____________________________________________________________________________________
	  function populateInfo() {
		  if (document.cookie) {
			  var uname = document.cookie;
			  uname = uname.substring(uname.lastIndexOf("=") + 1);
			  document.getElementById("usernameinput").value = uname;
		  }
	  }
	  //_____________________________________________________________________________________
	  function handleSubmit() {
		  if (evt.preventDefault) {
			  evt.preventDefault();
		  } else {
			  evt.returnValue = false
		  } 
		  processCookie();
		  document.getElementByTagName ("form")[0].submit();
	  }
	  //____________________________________________________________________________________
	  function createEvemtListener() {
		  var loginForm = document.getElementByTagName("form")[0];
		  if (loginForm.addEventListener) {
			  loginForm.addEventListener("submit", handleSubmit, 
			  false);
		  } else if (loginForm.attachEvent) {
			  loginForm.attachEvent("onsubmit", handleSubmit);
		  }
	  }
	  //___________________________________________________________________________________
	  function setUpPage() {
		  populateInfo();
		  createEventListener();
	  }
	  if (window.addEventListener) {
		  window.addEventListener ("load", setUpPage, false); 
	  } else if(window.attachEvent) {
		  window.attachEvent("onload", setUpPage);
	  }
	  
		  