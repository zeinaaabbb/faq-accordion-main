
// when the question div is clicked
// trigger the answer for that question to be opened
// This will turn image+ into image-

// console.log("Hello");
// window.alert("This is an alert");

const buttons = document.querySelectorAll(".button");
const answers = document.querySelectorAll(".answer");

function opensAnswers() {
  let answer = document.querySelector(".answer");
  answer.style.display = "block";
  console.log("Answer Triggered");
  plus.style.display = "none";
  minus.style.display = "block";
}


buttons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    console.log(event);
    // event.classList.remove("answer", "icon-minus");
    // console.log(event);
    document.querySelector(".answer");
    console.log(event.currentTarget);
    btn.classList.toggle(".answer")
    const minus = btn.classList.toggle('icon-minus')
    const plus = btn.classList.toggle('icon-plus123')
    const answerDescription = this.nextElementSibling
  });
  // if (btn.classList.contains("icon-plus")) {
  //   console.log("btn conatins icon ")
  //   opensAnswers();
  // } else {
  //   alert("error");
  // }
});
