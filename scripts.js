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
