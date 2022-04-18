const navOpen = document.querySelector(".open-nav");
const navClose = document.querySelector(".close-nav");
const navLink = document.querySelector(".nav-link");
const navSubLink = document.querySelectorAll(".list-items");
const pointerUp = document.querySelectorAll(".arrow-control");
const subLinkItems = document.querySelectorAll(".nav-sublink")

function navToggle() {
    navLink.classList.toggle("active");
    if (navLink.classList.contains("active")) {
        navClose.style.display = "block"
        navOpen.style.display = "none";
    }
    else {
        navClose.style.display = "none"
        navOpen.style.display = "block";
    }
}
navOpen.addEventListener("click", () => {
    navToggle();
})
navClose.addEventListener("click", () => {
    navToggle();
})

navSubLink.forEach(subLink => {
    subLink.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;
        else {
            subLink.classList.toggle("nav-exapnd")
            subLink.classList.toggle("pointer-up")
        }
    })
})