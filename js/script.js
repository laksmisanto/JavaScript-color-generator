var btn = document
  .getElementById("btn")
  .addEventListener("click", GenerateColorCode);
var setColor = document.getElementById("color__code");
var body = document.body;

function GenerateColorCode() {
  var length = 6;
  let char = "0123456789ABCDEF";

  var colorCode = "";

  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * char.length);
    colorCode += char[randomIndex];
  }
  var color = "#" + colorCode;

  setColor.innerHTML = color;
  body.style.backgroundColor = color;
}
