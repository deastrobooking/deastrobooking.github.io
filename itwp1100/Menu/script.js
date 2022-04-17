/* JavaScript 6th Edition
Chpater 9
Chapter case
Eating Well in Season

Author: Randolph Chabot
Date: 4-17-22
Filename: script3.js
*/
function clearCookies(){
  var cookieString = document.cookie;
  var cookieArray = cookieString.split("; ");
  var expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() - 7);
  for(var i = 0; i < cookieArray.length; i++){
    document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
  }
}

if(window.addEventListener){
  window.addEventListener("load", clearCookies, false);
}else if(window.attachEvent){
  window.attachEvent("onload", clearCookies);
}
