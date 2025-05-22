document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("cookiePopup");
    const acceptBtn = document.getElementById("acceptBtn");
    const closeBtn = document.getElementById("closeBtn");
  
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      popup.classList.remove("hidden");
    }
  
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      popup.classList.add("hidden");
    });
  
    closeBtn.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  });
  