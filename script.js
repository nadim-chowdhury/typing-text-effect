let text = ["Hello World", "I am Nadim Chowdhury", "I am a Web Developer"];
let index = 0;
let count = 0;
let currentText = 0;
let letter = 0;

setInterval(fun, 400);

function fun() {
  currentText = text[count];
  letter = currentText.slice(0, index++);
  let title = document.querySelector("h1").innerHTML = letter;

  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }

  if (count == text.length) {
    count = 0;
  }
}
