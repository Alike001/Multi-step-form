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