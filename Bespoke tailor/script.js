document.body.classList.add("dark-mode");


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  // default theme
  if (!localStorage.getItem("theme")) {
    body.classList.add("light-mode");
  }

  // load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});




/* ================= HEADER RESPONSIVE ================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-menu-btn");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  // Open mobile menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  // Close mobile menu
  const closeMenu = () => {
    mobileMenu.classList.remove("show");
    document.body.style.overflow = "";
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Close when clicking any link
  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("show")) {
      closeMenu();
    }
  });

  // Auto close menu on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});