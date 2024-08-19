document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  const logoSpans = document.querySelectorAll(".logo");

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
  }, 2000);

  // Move the .intro element up after the fade effect
  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2700); // Adjusted the delay to ensure it's after the fade effect
});
