// ==============================
// QUESTION BANK
// ==============================
const questions = [
  {
    q: "What does UX stand for?",
    options: ["User Experience", "User Extension", "Universal Experience", "User Execution"]
  },
  {
    q: "Which tool is used for UI design?",
    options: ["VS Code", "Figma", "Git", "Node.js"]
  },
  {
    q: "What is wireframing?",
    options: ["Final UI", "Backend logic", "Layout blueprint", "Testing"]
  },
  {
    q: "Which is a UX principle?",
    options: ["Consistency", "Animation", "Colors", "Typography"]
  },
  {
    q: "Accessibility means?",
    options: ["Fast loading", "Usable by everyone", "Modern UI", "Trendy"]
  }
];

let current = 0;
let answers = Array(questions.length).fill(null);
let review = Array(questions.length).fill(false);

// ==============================
// DOM
// ==============================
const qText = document.getElementById("questionText");
const optionsBox = document.getElementById("options");
const counter = document.getElementById("questionCounter");
const progress = document.getElementById("progress");
const markBtn = document.getElementById("markBtn");

// ==============================
// LOAD QUESTION
// ==============================
function loadQuestion() {
  const q = questions[current];
  qText.textContent = q.q;
  counter.textContent = `Question ${current + 1} of ${questions.length}`;
  progress.style.width = `${((current + 1) / questions.length) * 100}%`;

  markBtn.classList.toggle("active", review[current]);

  optionsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `<span>${String.fromCharCode(65 + i)}</span>${opt}`;

    if (answers[current] === i) div.classList.add("selected");

    div.onclick = () => {
      answers[current] = i;
      loadQuestion();
    };

    optionsBox.appendChild(div);
  });
}

// ==============================
// NAVIGATION
// ==============================
document.getElementById("nextBtn").onclick = () => {
  if (current < questions.length - 1) current++;
  loadQuestion();
};

document.getElementById("prevBtn").onclick = () => {
  if (current > 0) current--;
  loadQuestion();
};

// ==============================
// MARK FOR REVIEW
// ==============================
markBtn.onclick = () => {
  review[current] = !review[current];
  loadQuestion();
};

// ==============================
// END TEST
// ==============================
document.getElementById("endTestBtn").onclick = () => {
  if (confirm("Are you sure you want to end the test?")) {
    window.location.href = "result.html"; // future page
  }
};

// ==============================
// TIMER
// ==============================
let time = 600;
setInterval(() => {
  time--;
  const min = Math.floor(time / 60);
  const sec = time % 60;
  document.getElementById("timer").textContent =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
  if (time <= 0) window.location.href = "result.html";
}, 1000);

// INIT
loadQuestion();
