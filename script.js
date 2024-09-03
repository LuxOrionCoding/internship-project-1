const mainElement = document.querySelector("main");
const navbar = document.querySelector("nav");
const navbarItems = document.querySelectorAll(".navbar-nav li a");
const navbarTogglerBtn = document.querySelector(".navbar-toggler");

const primarySections = document.querySelectorAll(
    "main > section:not(.engagement__section)"
);

//* Mobile View Navbar

navbarTogglerBtn.onclick = function () {
    this.classList.toggle("active");
};

//* ScrollSpy

window.onscroll = () => {
    primarySections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navbarItems.forEach((links) => {
                links.classList.remove("active");
            });
            let index = Array.from(primarySections).indexOf(section);
            navbarItems[index].classList.add("active");
        }
    });
};

//* Change Navbar Background on Scroll

window.addEventListener(
    "scroll",
    function () {
        // Change navbar style on scroll
        if (window.scrollY >= 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    },
    false
);
