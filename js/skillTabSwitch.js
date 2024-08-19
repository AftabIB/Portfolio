document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const tabContainer = button.parentElement;
    const tabId = button.dataset.tab;
    const tabToActivate = document.querySelector(`.tab-content#${tabId}`);

    tabContainer.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.classList.remove("active");
    });

    button.classList.add("active");
    tabToActivate.classList.add("active");
  });
});
