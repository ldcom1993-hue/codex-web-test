const STORAGE_KEY = "mobile-counter-value";

const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = Number.parseInt(localStorage.getItem(STORAGE_KEY), 10);
if (Number.isNaN(count)) {
  count = 0;
}

function renderCounter() {
  counterEl.textContent = String(count);
}

function persistCounter() {
  localStorage.setItem(STORAGE_KEY, String(count));
}

incrementBtn.addEventListener("click", () => {
  count += 1;
  renderCounter();
  persistCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  renderCounter();
  persistCounter();
});

renderCounter();
