btn1.addEventListener("click", clickBtn);
console.log("hello");

document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll Effect
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form Submission Handling
  document.getElementById("btn3").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  });
});
console.log("fine here");
//for contact from
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOFdDSl2-Z7G_41rW3pj_HfyxBT9_ytHSG9pIk2Z6qdc_lRLWjk1g8x1VAyuwidXYEpg/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
console.log("its ok");
