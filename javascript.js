/* ================= TYPING EFFECT ================= */

const words = [
    "a Web Developer",
    "a Programmer",
    "a BCA Student",
    "a Hackathon Enthusiast",
    "a Creative Learner"
];

let wordIndex = 0;
let letterIndex = 0;

const typingElement =
    document.getElementById("typing");


function type() {

    if (letterIndex < words[wordIndex].length) {

        typingElement.textContent +=
            words[wordIndex][letterIndex];

        letterIndex++;

        setTimeout(type, 90);

    }

    else {

        setTimeout(erase, 1500);

    }

}


function erase() {

    if (letterIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(
                0,
                letterIndex - 1
            );

        letterIndex--;

        setTimeout(erase, 45);

    }

    else {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(type, 300);

    }

}


type();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 250;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});