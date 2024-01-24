document.addEventListener("DOMContentLoaded", function () {
    var feedbackForm = document.querySelector("form");
    var thankYouMessage = document.getElementById("thankYouMessage");
  
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      thankYouMessage.style.display = "block";
      feedbackForm.style.display = "none";
      
      // Simula o envio do formulário para o FormSubmit
      setTimeout(function () {
        feedbackForm.submit();
      }, 2000);
    });
  });