// Menu Toggle for Mobile Devices
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Toggle menu icon
    const icon = menuBtn.querySelector("i"); // Assuming an <i> tag inside #menu-btn
    if (icon) {
      icon.classList.toggle("ri-menu-line");
      icon.classList.toggle("ri-close-line");
    }
  });

  // Close menu when any link is clicked (for mobile)
  const navItems = document.querySelectorAll(".nav__links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Close menu when clicking outside (optional)
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });
}

// ScrollReveal Animation
if (typeof ScrollReveal !== "undefined") {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });

  ScrollReveal().reveal(".destination__card", { ...scrollRevealOption, interval: 500 });

  ScrollReveal().reveal(".showcase__image img", { ...scrollRevealOption, origin: "left" });
  ScrollReveal().reveal(".showcase__content h4", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".showcase__content p", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".showcase__btn", { ...scrollRevealOption, delay: 1500 });

  ScrollReveal().reveal(".banner__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".discover__card", { ...scrollRevealOption, interval: 500 });
}

// SwiperJS Carousel
if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  });
}

// Form Validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submission

    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    // form.submit(); // Uncomment for real submission
  });
}
