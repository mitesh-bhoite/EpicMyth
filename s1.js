document.addEventListener("DOMContentLoaded", function () {
  console.log("Page Loaded Successfully!");

  // Smooth Scroll Effect for Navigation Links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Google Sheets Form Submission
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyOWLc08RBdoOkrOdClE8hSeqeg05mbrEn6qLFMosMiovDq5Gc8QVjxvBfKz3eMjR93_Q/exec";
  const form = document.forms["submit-to-google-sheet"];
  console.log("mith");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("ok");
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log("Form submitted successfully!", response);
          alert("Form submitted successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("Form submission error:", error.message);
          alert("Failed to submit form. Please try again.");
        });
    });
  } else {
    console.error("Form not found! Check form name or ID.");
  }
});
