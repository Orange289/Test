var next = document.querySelector(".howitworks__next");
var prev = document.querySelector(".howitworks__prev");
var phone = document.querySelector(".howitworks__item--phone");
var feedback = document.querySelector(".howitworks__item--feedback");
var inp = document.getElementById("howitworks-input-1");
next.addEventListener("click", function(event) {
  inp.checked = false;
  event.preventDefault();
  phone.classList.toggle("howitworks__inactive");
  feedback.classList.toggle("howitworks__active");
});
prev.addEventListener("click", function(event) {
  inp.checked = false;
  event.preventDefault();
  phone.classList.toggle("howitworks__active");
  feedback.classList.toggle("howitworks__inactive");
});
