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
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Dynamic typing effect
const typedText = document.getElementById("typed-text");
const words = ["Web Developer", "UI/UX Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
  }
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Toggle dark/light mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Responsive navigation menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");
