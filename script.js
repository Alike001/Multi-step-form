const sections = document.querySelectorAll("section");
const nextButtons =document.querySelectorAll(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const steps = document.querySelectorAll(".step")

let currentStep = 0;

function stepIndicator() {
  steps.forEach((step,index)=> {
    step.classList.remove("active", "completed")
    if(index < currentStep) {
    step.classList.add("completed");
  } else if (index === currentStep) {
    step.classList.add("active");
  }
  });
}

sections[currentStep].classList.add("active");
stepIndicator();

nextButtons.forEach((button)=> {
  button.addEventListener("click", () => {
    if (sections[currentStep].classList.contains("skills-info")) {
    fillReview();
    }
    sections[currentStep].classList.remove("active")
    currentStep++;
    sections[currentStep].classList.add("active")
    stepIndicator();
  });
});

submitBtn.addEventListener("click", () => {
  sections[currentStep].classList.remove("active");
  currentStep++;
  sections[currentStep].classList.add("active");
  stepIndicator();
});

function fillReview() {
  document.getElementById("review-name").textContent =
    document.getElementById("name").value;

  document.getElementById("review-age").textContent =
    document.getElementById("age").value;

  document.getElementById("review-email").textContent =
    document.getElementById("email").value;

  document.getElementById("review-phone").textContent =
    document.getElementById("phone").value;

  document.getElementById("review-school").textContent =
    document.getElementById("school").value;

  document.getElementById("review-level").textContent =
    document.getElementById("level").value;

  document.getElementById("review-department").textContent =
    document.getElementById("department").value;

  document.getElementById("review-skills").textContent =
    document.getElementById("skills").value;

  document.getElementById("review-proficiency").textContent =
    document.getElementById("skill-level").value;

  document.getElementById("review-improvement").textContent =
    document.getElementById("improvement").value;
}