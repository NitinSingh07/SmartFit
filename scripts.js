// mobile menu toggle

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const testimonials = [
  "Amazing watch! Helped me improve my fitness.",
  "Battery life is incredible. Totally worth it!",
  "Best smartwatch I’ve used so far.",
];

let currentIndex = 0;

const testimonialText = document.getElementById("testimonial-text");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// initial testimonial
testimonialText.textContent = testimonials[currentIndex];

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonialText.textContent = testimonials[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  testimonialText.textContent = testimonials[currentIndex];
});

const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const errorMsg = document.getElementById("error");

submitBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();

  // Simple email regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailValue === "") {
    errorMsg.textContent = "Email cannot be empty";
    errorMsg.style.color = "red";
  } else if (!emailPattern.test(emailValue)) {
    errorMsg.textContent = "Enter a valid email";
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "Subscribed successfully!";
    errorMsg.style.color = "green";
    emailInput.value = "";
  }
});
