/* MENU TOGGLE */
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* SMOOTH SCROLL */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* COUNTER ANIMATION */
let started = false;

window.addEventListener("scroll", () => {
    const section = document.getElementById("impact");
    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight && !started) {
        startCounters();
        started = true;
    }
});

function startCounters() {
    animateCounter("count1", 25);
    animateCounter("count2", 300);
    animateCounter("count3", 15);
}

function animateCounter(id, target) {
    let count = 0;
    const element = document.getElementById(id);

    const interval = setInterval(() => {
        count++;
        element.innerText = count;
        if (count === target) {
            clearInterval(interval);
        }
    }, 20);
}

/* FORM VALIDATION */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;
    const formMsg = document.getElementById("formMsg");

    if (name === "" || email === "" || msg === "") {
        formMsg.innerText = "Please fill all fields.";
        formMsg.style.color = "red";
    } else {
        formMsg.innerText = "Message submitted successfully!";
        formMsg.style.color = "green";
        this.reset();
    }
});
