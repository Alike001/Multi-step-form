const sections = document.querySelectorAll("section");
const nextButtons =document.querySelectorAll(".next-btn");
const submitBtn = document.querySelector(".submit-btn");

let currentStep = 0;

sections[currentStep].classList.add("active")

nextButtons.forEach(button => {
  button.addEventListener("click", () => {
    sections[currentStep].classList.remove("active")
    currentStep++;
    sections[currentStep].classList.add("active")
  })
});

submitBtn.addEventListener("click", () => {
  sections[currentStep].classList.remove("active");
  currentStep++;
  sections[currentStep].classList.add("active");
});

