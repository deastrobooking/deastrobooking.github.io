/*
JavaScript 6th Edition
Project 3

Author: Randolph Chabot 
Date:   4/15/2022

Filename: contact.html

*/
// Example of Minification by making code less redeable you can slow hackers down and frustrate them. 
// Ofuscation is another method of making code less redeadble and impossible to understand.
// Article Here. https://blog.jscrambler.com/javascript-obfuscation-the-definitive-guide

function printError(r,e){document.getElementById(r).innerHTML=e}function validateForm(){for(var r=document.contactForm.name.value,e=document.contactForm.email.value,n=document.contactForm.mobile.value,t=document.contactForm.country.value,o=document.contactForm.gender.value,a=[],l=document.getElementsByName("hobbies[]"),i=0;i<l.length;i++)l[i].checked&&a.push(l[i].value);var m=emailErr=mobileErr=countryErr=genderErr=!0;""==r?printError("nameErr","Please enter your name"):!1===/^[a-zA-Z\s]+$/.test(r)?printError("nameErr","Please enter a valid name"):(printError("nameErr",""),m=!1);""==e?printError("emailErr","Please enter your email address"):!1===/^\S+@\S+\.\S+$/.test(e)?printError("emailErr","Please enter a valid email address"):(printError("emailErr",""),emailErr=!1);""==n?printError("mobileErr","Please enter your mobile number"):!1===/^[1-9]\d{9}$/.test(n)?printError("mobileErr","Please enter a valid 10 digit mobile number"):(printError("mobileErr",""),mobileErr=!1);if("Select"==t?printError("countryErr","Please select your country"):(printError("countryErr",""),countryErr=!1),""==o?printError("genderErr","Please select your gender"):(printError("genderErr",""),genderErr=!1),1==(m||emailErr||mobileErr||countryErr||genderErr))return!1;var E="You've entered the following details: \nFull Name: "+r+"\nEmail Address: "+e+"\nMobile Number: "+n+"\nCountry: "+t+"\nGender: "+o+"\n";a.length&&(E+="Hobbies: "+a.join(", ")),alert(E)}
// Code to handle Comment Section of Form. 
$(document).ready(function(){ 
 
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });//end keyup
  });//End Function
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }
  });
/*

//Original Javascript Code

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

*/

