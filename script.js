const quotes = [
  "Push yourself, because no one else will.",
  "Education unlocks your future.",
  "Consistency beats talent.",
  "Success starts with discipline.",
  "Dream big. Study smart."
];

const splash = document.getElementById("splash");
const landing = document.getElementById("landing");
const loader = document.getElementById("loader");
const app = document.getElementById("appContainer");
const btn = document.getElementById("startBtn");
const quote = document.getElementById("quote");
const installBtn = document.getElementById("installBtn");

// Show quote
quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Splash logic (only first time)
if (!localStorage.getItem("visited")) {
  setTimeout(() => {
    splash.style.display = "none";
    landing.style.display = "flex";
  }, 2000);
} else {
  splash.style.display = "none";
  landing.style.display = "flex";
  btn.textContent = "Welcome Back - Continue Studying";
}

// Start button
btn.onclick = () => {
  localStorage.setItem("visited", "true");

  landing.style.display = "none";
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    app.style.display = "block";
  }, 1500);
};

// Install PWA
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
  installBtn.style.display = "none";
  deferredPrompt.prompt();
});

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
    }
