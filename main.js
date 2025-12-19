let textElement = document.getElementById("text");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
    textElement.textContent = "Le texte a été changé !";
});

btn2.addEventListener("click", function() {
    textElement.style.color = "red";
});