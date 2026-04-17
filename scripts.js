// mobile menu toggle

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


const testimonials = [
  {
    text: '"Amazing watch! Helped me improve my fitness dramatically with precise tracking."',
    name: "Alex Johnson",
    role: "Professional Trainer"
  },
  {
    text: '"Battery life is incredible. I only charge it once a week, and it still performs perfectly."',
    name: "Sarah Miller",
    role: "Marathon Runner"
  },
  {
    text: '"Best smartwatch I’ve used so far. The sleek design and health alerts are a game changer."',
    name: "Michael Chen",
    role: "Tech Enthusiast"
  },
];

let currentIndex = 0;

const testimonialText = document.getElementById("testimonial-text");
const authorName = document.getElementById("author-name");
const authorRole = document.getElementById("author-role");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function updateTestimonial(index) {
  testimonialText.textContent = testimonials[index].text;
  authorName.textContent = testimonials[index].name;
  authorRole.textContent = testimonials[index].role;
}

updateTestimonial(0);

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});


const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailValue === "") {
    errorMsg.style.color = "#ef4444";
    errorMsg.textContent = "Email is required.";
  } else if (!emailPattern.test(emailValue)) {
    errorMsg.style.color = "#ef4444";
    errorMsg.textContent = "Enter a valid email address.";
  } else {
    errorMsg.style.color = "#22c55e";
    errorMsg.textContent = "Subscribed successfully!";
    emailInput.value = "";
  }
});
