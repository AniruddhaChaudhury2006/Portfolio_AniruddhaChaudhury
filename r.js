// =======================================
// 1. Smooth Scroll (Precise + Header Offset)
// =======================================

const headerHeight = 90;

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    const offsetTop =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});


// =======================================
// 2. Section Reveal (Subtle + Professional)
// =======================================

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll(".section, .project-card")
  .forEach(el => revealObserver.observe(el));


// =======================================
// 3. Active Nav Indicator (Accurate)
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);


// =======================================
// 4. Header Elevation on Scroll
// =======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});
// =======================================
// 5. Mobile Menu Toggle
// =======================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
