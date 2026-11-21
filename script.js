
// ===================================
// 1. MOBILE HAMBURGER MENU
// ===================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ===================================
// 2. DARK AND LIGHT THEME
// ===================================

const themeToggle = document.getElementById("theme-toggle");

// Check previously selected theme

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("portfolio-theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("portfolio-theme", "light");

    }

});


// ===================================
// 3. PROJECT DETAILS MODAL
// ===================================

const projectButtons = document.querySelectorAll(".project-btn");

const projectModal = document.getElementById("project-modal");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");

const modalClose = document.getElementById("modal-close");


// Open project modal

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const title = button.getAttribute("data-title");

        const description = button.getAttribute("data-description");

        modalTitle.textContent = title;

        modalDescription.textContent = description;

        projectModal.classList.add("active");

        projectModal.setAttribute("aria-hidden", "false");

    });

});


// Close modal using close button

modalClose.addEventListener("click", function () {

    projectModal.classList.remove("active");

    projectModal.setAttribute("aria-hidden", "true");

});


// Close modal by clicking outside

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.classList.remove("active");

        projectModal.setAttribute("aria-hidden", "true");

    }

});


// Close modal using Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        projectModal.classList.remove("active");

        projectModal.setAttribute("aria-hidden", "true");

    }

});
