// Initialize the typing effect
var typed = new Typed(".typing", {
    strings: ["Frontend Developer"], // Words to type
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 60, // Backspacing speed in milliseconds
    loop: true // Whether to loop through the words
});

// Show/hide nav menu based on checkbox
const menuCheckbox = document.getElementById('click');
const menuLinks = document.querySelectorAll('#navbar ul a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuCheckbox.checked = false; // Hide the menu when a link is clicked
    });
});

// Nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
});
