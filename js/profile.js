// ==============================
// STAT COUNT-UP ANIMATION
// ==============================
document.querySelectorAll(".stat-card").forEach(card => {
  const target = +card.dataset.count;
  const value = card.querySelector("span");
  let count = 0;

  const interval = setInterval(() => {
    count++;
    value.textContent = count;
    if (count === target) clearInterval(interval);
  }, 30);
});
