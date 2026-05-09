// ================================
// LOGIN / SIGNUP SWITCHER
// ================================
const switchButtons = document.querySelectorAll(".switch-btn");
const forms = document.querySelectorAll(".auth-form");

switchButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    switchButtons.forEach(b => b.classList.remove("active"));
    forms.forEach(f => f.classList.remove("active"));

    btn.classList.add("active");
    document
      .querySelector(`.${btn.dataset.form}-form`)
      .classList.add("active");
  });
});

// ================================
// LOGIN → DASHBOARD
// ================================
document
  .querySelector(".login-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 600);
  });

// ================================
// SIGNUP → DASHBOARD
// ================================
document
  .querySelector(".signup-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 600);
  });
