
const messages = [
  "Hey How you been!?",
  "It has been a minute what is new??",
  "where did you come from, haha!",
  "lol are you kidding me",
  "and so  what do u mean",
  "That is really interesting",
  "How is your fam?"
];
let counter = 0;
const chatContainer = document.querySelector(".container");
const chatArea = document.querySelector(".message-body");
const text = document.querySelector("#text");
const form = document.querySelector(".form");

text.value="";
function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

function scroll() {
   if(chatArea){
        chatArea.scroll(-1,chatArea.scrollHeight);
      }
}

function reply(msg) {
  let li = document.createElement("li");
  li.innerHTML = msg;
  li.classList.add("chatbox");
  li.classList.add("chatbox-incoming");
  chatArea.append(li);
  scroll();
}


//EVENT LISTENERS
text.addEventListener("focus", () => {
  chatContainer.scrollTop = chatArea.scrollHeight + 560;
});

form.addEventListener("submit", e => {
  e.preventDefault();
  if(text.value.length !== 0){
  msg = text.value;
  let li = document.createElement("li");
  li.innerHTML = msg;
  li.classList.add("chatbox");
  li.classList.add("chatbox-outgoing");
  chatArea.append(li);
  scroll();
  text.value = "";
  text.focus();
  setTimeout(reply, 1000, messages[counter]);
  counter++;
  if (counter == messages.length) {
    counter = 0;
  }
  }
});

window.onload = ()=>{
  reply("hi please type a message for me")
}