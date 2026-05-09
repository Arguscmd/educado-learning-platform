const searchInput = document.getElementById("searchQuiz");
const filterBtns = document.querySelectorAll(".filter-btn");
const quizCards = document.querySelectorAll(".quiz-card");

let activeCategory = "all";

// SEARCH
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  quizCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

// FILTER
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    activeCategory = btn.dataset.category;

    quizCards.forEach(card => {
      card.style.display =
        activeCategory === "all" || card.dataset.category === activeCategory
          ? "block"
          : "none";
    });
  });
});


// =============================
// CUSTOM SORT DROPDOWN
// =============================
const sortDropdown = document.getElementById("sortDropdown");
const sortTrigger = sortDropdown.querySelector(".sort-trigger");
const sortOptions = sortDropdown.querySelectorAll(".sort-menu li");
const selectedSort = document.getElementById("selectedSort");

// Toggle dropdown
sortTrigger.addEventListener("click", () => {
  sortDropdown.classList.toggle("open");
});

// Select option
sortOptions.forEach(option => {
  option.addEventListener("click", () => {
    sortOptions.forEach(o => o.classList.remove("active"));
    option.classList.add("active");
    selectedSort.textContent = option.textContent;
    sortDropdown.classList.remove("open");

    // Future hook: sorting logic
    console.log("Sort by:", option.textContent);
  });
});

// Close on outside click
document.addEventListener("click", (e) => {
  if (!sortDropdown.contains(e.target)) {
    sortDropdown.classList.remove("open");
  }
});

