document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Highlight active section in navbar on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Portfolio image hover effect
    const portfolioBoxes = document.querySelectorAll(".portfoliobox");

    portfolioBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.querySelector(".portfoliollayer").style.opacity = "1";
        });

        box.addEventListener("mouseleave", () => {
            box.querySelector(".portfoliollayer").style.opacity = "0";
        });
    });

    // Contact form validation and submission
    const form = document.querySelector("form");
    const nameInput = form.querySelector('input[placeholder="Full Name"]');
    const emailInput = form.querySelector('input[placeholder="Email Address"]');
    const phoneInput = form.querySelector('input[placeholder="Phone Number"]');
    const subjectInput = form.querySelector('input[placeholder="Subject"]');
    const messageInput = form.querySelector("textarea");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    // Phone number validation function
    function validatePhone(phone) {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    }
});
