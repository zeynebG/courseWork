var btn = document.querySelector(".learnMore");
var appBtn = document.querySelector(".appoinment");
var contactUs = document.querySelector(".btn");

function btnClick() {
  console.log("hello");
  window.location.href = "services.html";
}
btn.addEventListener("click", btnClick);

function handleClick() {
  console.log("hello");
  window.location.href = "contact.html";
}
appBtn.addEventListener("click", handleClick);

function eventClick() {
  var inputs = document.querySelectorAll(".formPart input[required]");
  var filled = true;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      filled = false;
      break;
    }
  }

  if (filled) {
    alert("You registered successfully");
  } else {
    alert("Please fill the form");
  }
}
inputs.addEventListener("click", eventClick);

function clicking() {
  window.location.href = "contact.html";
}
contactUs.addEventListener("click", clicking);
