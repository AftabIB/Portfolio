// =============== Typing Animation ===============

var typed = new Typed(".typing", {
  strings: [
    "Student",
    "Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Photographer",
  ],
  typeSpeed: 130,
  backSpeed: 30, // corrected property name
  loop: true,
});

// =============== Aside ===============

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j); // corrected to pass index
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  const targetElement = document.querySelector("#" + target);
  if (targetElement) {
    targetElement.classList.add("active");
  }
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  // corrected to use index
  allSection[num].classList.add("back-section");
}

function updateNav(element) {
  const target = element.getAttribute("href").split("#")[1];
  for (let i = 0; i < totalNavList; i++) {
    const navLink = navList[i].querySelector("a");
    navLink.classList.remove("active");
    if (navLink.getAttribute("href").includes(target)) {
      navLink.classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex); // Make sure this is as intended
  showSection(this);
  updateNav(this);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
