document.addEventListener("DOMContentLoaded", () => {
  const logoSpans = document.querySelectorAll(".splashlogo");
  const mainContainer = document.querySelector(".main-container");
  const topPart = document.querySelector(".overlay-part.top");
  const bottomPart = document.querySelector(".overlay-part.bottom");

  // Show each logo span with a delay
  logoSpans.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("active");
    }, (idx + 1) * 400);
  });

  // Fade out each logo span after a delay
  setTimeout(() => {
    logoSpans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("active");
        span.classList.add("fade");
      }, (idx + 1) * 50);
    });
  }, 3000);

  // Split the screen upwards
  setTimeout(() => {
    topPart.style.transform = "translateY(-100%)";
    bottomPart.style.transform = "translateY(100%)";
  }, 3700);

  // Show the main content
  setTimeout(() => {
    document.querySelector(".splash-overlay").style.display = "none";
    mainContainer.classList.remove("hidden");
    mainContainer.classList.add("visible");
  }, 4900); // Adjust timing to ensure the split animation 
});
