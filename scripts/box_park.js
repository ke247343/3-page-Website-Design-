document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    splashScreen.classList.add("fade-out");
    setTimeout(() => {
      splashScreen.style.display = "none";
      mainContent.classList.remove("hidden");
      document.body.style.overflow = "auto";
    }, 500); 
  }, 600); 
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const counter = document.querySelector(".image-counter");
  const locations = [
    "",
  ];

  let currentSlide = 0;

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    counter.innerHTML = `<span>${currentSlide + 1}/4: ${
      locations[currentSlide]
    }</span>`;
  }, 2500);
});
