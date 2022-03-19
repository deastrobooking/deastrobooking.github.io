// JavaScript Document
/* Uses the script tag to reference this external file from within your HTML document for navigation with the external JavaScript */

//document.write("<div class = 'navi' style='text-align: center;'>");
//document.wriet("<footer>");

//document.write("<p class ='hero_header'><a href='../home.htm'>COURSE HOMEPAGE</a> | <a href=,mathstar.html'>HOME</a> | <a //href='about.html'>ABOUT</a> | <a href='projects.html'>PROJECTS</a> | <a href='lessons.html'>SUBJECTS</a></p>");



//document.write("</footer>");

document.write("<div class='button'><p>Email: <a href='mailto:chabotr523@macomb.edu' target='_blank'>chabotr523@macomb.edu</a></p></div>");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
