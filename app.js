const STORAGE_KEY = "mobile-counter-value";
const THEME_KEY = "mobile-counter-theme";

const rootEl = document.documentElement;
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = themeToggleBtn.querySelector(".icon");

let count = Number.parseInt(localStorage.getItem(STORAGE_KEY), 10);
if (Number.isNaN(count)) {
  count = 0;
}

let theme = localStorage.getItem(THEME_KEY);
if (theme !== "light" && theme !== "dark") {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function renderCounter() {
  counterEl.textContent = String(count);
}

function animateCounter() {
  counterEl.classList.remove("bump");
  void counterEl.offsetWidth;
  counterEl.classList.add("bump");
}

function persistCounter() {
  localStorage.setItem(STORAGE_KEY, String(count));
}

function renderTheme() {
  rootEl.dataset.theme = theme;
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeToggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function persistTheme() {
  localStorage.setItem(THEME_KEY, theme);
}

incrementBtn.addEventListener("click", () => {
  count += 1;
  renderCounter();
  animateCounter();
  persistCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  renderCounter();
  animateCounter();
  persistCounter();
});

themeToggleBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  renderTheme();
  persistTheme();
});

renderCounter();
renderTheme();
