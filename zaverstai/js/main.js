let articles = document.querySelectorAll(".blog-article");
let filter = document.querySelector(".filter");

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== "all") {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
};

let messageForm = document.querySelector(".form-message");
let messageField = document.querySelector(".message-field");
let charCounter = document.querySelector(".char-counter");
let submitButton = document.querySelector(".btn-send");

messageForm.onsubmit = function (evt) {
  evt.preventDefault();
  charCounter.textContent = 0;
};

messageField.oninput = function () {
  charCounter.textContent = messageField.value.length;

  if (messageField.value.length < 10 || messageField.value.length > 200) {
    messageForm.classList.add("warning");
    submitButton.disabled = true;
  } else {
    messageForm.classList.remove("warning");
    submitButton.disabled = false;
  }
};
