// ===== Navbar Toggle for Mobile =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('nav');

// Create hamburger dynamically
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `<span></span><span></span><span></span>`;
navbar.appendChild(hamburger);

// Toggle menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Animate Skill Bars =====
window.addEventListener("load", () => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value;
    });
});

// ===== Contact Form Validation =====
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const msg = document.getElementById("formMsg");

        if (name === "" || email === "" || message === "") {
            msg.style.color = "red";
            msg.innerText = "❌ Please fill all fields";
            return;
        }

        if (!email.includes("@")) {
            msg.style.color = "red";
            msg.innerText = "❌ Enter a valid email";
            return;
        }

        msg.style.color = "green";
        msg.innerText = "✅ Message sent successfully!";
        form.reset();
    });
}
