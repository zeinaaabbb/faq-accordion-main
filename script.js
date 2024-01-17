
// when the question div is clicked
// trigger the answer for that question to be opened
// This will turn image+ into image-

// console.log("Hello");
// window.alert("This is an alert");

const buttons = document.querySelectorAll("button");

function myFunction(answerDescription, plus, minus) {
  answerDescription.style.display = "block";
  if (plus) {
    plus.style.display = "block";
  }
  if (minus) {
    minus.style.display = "none";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function() {
    const answer = btn.classList.toggle(".answer");
    const minus = btn.classList.toggle('icon-minus');
    const plus = btn.classList.toggle('icon-plus');
    const answerDescription = this.nextElementSibling;

    if (btn.classList.contains("icon-plus")) {
      myFunction(answerDescription, plus, minus);
    } else {
      alert("error");
    }
  });
});
