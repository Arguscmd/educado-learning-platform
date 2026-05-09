// ==============================
// CURRICULUM ACCORDION
// ==============================
document.querySelectorAll(".module-header").forEach(header => {
  header.addEventListener("click", () => {
    const list = header.nextElementSibling;
    list.style.display = list.style.display === "none" ? "block" : "none";
  });
});
