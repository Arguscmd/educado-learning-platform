document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.querySelector(".enter-platform");

  enterBtn.addEventListener("click", () => {
    // Smooth fade-out before navigation
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 600);
  });
});