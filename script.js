
// when the question div is clicked
// trigger the answer for that question to be opened
// This will turn image+ into image-

// console.log("Hello");
// window.alert("This is an alert");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btn.classList.toggle(".answer, .icon-minus");
    btn.classList.add(".icon-minus");
    btn.classList.remove("icon-plus");
  });
});
