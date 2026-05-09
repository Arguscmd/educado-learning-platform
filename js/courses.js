const filterButtons = document.querySelectorAll(".filter-btn");
const courses = document.querySelectorAll(".course-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    courses.forEach(course => {
      if (category === "all" || course.dataset.category === category) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  });
});

// Future filter & sort logic placeholder
console.log("Educado Courses Page Loaded");


// Sidebar pill toggle (UI only)
document.querySelectorAll(".pill").forEach(pill => {
  pill.addEventListener("click", () => {
    pill.parentElement
      .querySelectorAll(".pill")
      .forEach(p => p.classList.remove("active"));

    pill.classList.add("active");
  });
});


const sortSelect = document.querySelector(".sort-select");

sortSelect.addEventListener("mousedown", () => {
  sortSelect.style.transform = "scale(0.97)";
});

sortSelect.addEventListener("mouseup", () => {
  sortSelect.style.transform = "scale(1)";
});


// ==============================
// SMOOTH PAGE TRANSITION
// ==============================
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").endsWith(".html")) {
      e.preventDefault();
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    }
  });
});
