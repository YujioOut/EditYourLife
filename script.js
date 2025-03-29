// script.js

document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    if (name && email && date) {
      document.getElementById(
        "booking-message"
      ).textContent = `Thank you, ${name}! Your session on ${date} is booked.`;
      this.reset();
    } else {
      document.getElementById("booking-message").textContent =
        "Please fill out all fields.";
    }
  });

// Fade-in effect on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".cube").forEach((cube) => {
  cube.classList.add("fade-in");
  observer.observe(cube);
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".fade-in").forEach((cube) => {
  observer.observe(cube);
});
