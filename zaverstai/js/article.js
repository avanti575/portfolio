
//ДОБАВИТЬ-УБРАТЬ ЛАЙК

let like = document.querySelector(".like");
let likesNumber = document.querySelector(".likes-number");


like.onclick = function () {
  if (like.classList.contains("added")) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle("added");
};


//ДОБАВЛЕНИЕ НОВОГО КОММЕНТАРИЯ
let formComments = document.querySelector(".form-comments");
let commentsList = document.querySelector(".post")
let commentsField = document.querySelector(".comments-field");


formComments.onsubmit = function (evt) {
  evt.preventDefault();
  charCounter.textContent = 0;

  let newComment = document.createElement("div");
  newComment.classList.add("post-visitors");
  newComment.textContent = commentsField.value;
  commentsField.value = '';
  commentsList.append(newComment);
}


//БЛОКИРОВКА ОТПРАВЛЕНИЯ ФОРМЫ ПРИ ВВОДЕ < 10 , > 200 СЛОВ

 let commentsfield = document.querySelector(".comments-field");
 let charCounter = document.querySelector(".char-counter");
 let submitButton = document.querySelector(".btn-send");
 
  
  commentsfield.oninput = function () {
    charCounter.textContent = commentsfield.value.length;
 
   if (commentsfield.value.length < 10 || commentsfield.value.length > 200) {
     formComments.classList.add("warning");
     submitButton.disabled = true;
   } else {
     formComments.classList.remove("warning");
     submitButton.disabled = false;
   }
 };