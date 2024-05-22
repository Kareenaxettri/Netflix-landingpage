const emailContainer = document.querySelector(".email-container");

const emailInput = document.querySelector(".email-input");

const emailContainerOverlay = window.getComputedStyle(
  emailContainer,
  "::before"
);

const defalutEmailContainerOverlay = emailContainerOverlay;

emailContainer.addEventListener("click", () => {
  emailInput.focus();
});

const questions = document.querySelectorAll('.question-container');

emailInput.addEventListener("focus", () => {
  emailContainer.style.setProperty("--beforeHeight", "70%");
  emailContainer.style.setProperty("--beforeFont", "1.2rem");
  emailContainer.style.border = "1px solid #fff";
});

emailInput.addEventListener("focusout", () => {
  emailContainer.style = defalutEmailContainerOverlay;
});

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    const number = e.currentTarget.dataset.questionnum;
    document.querySelector(`.answer${number}`).classList.toggle('hidden');
    const icon = e.currentTarget.querySelector('ion-icon');
    console.log(icon.getAttribute('name') == "add-outline" ? icon.setAttribute('name', 'close-outline') : icon.setAttribute('name', 'add-outline'))
  })
})