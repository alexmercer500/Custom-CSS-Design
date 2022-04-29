const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navMenu = document.querySelector(".nav-link-toggle");
const tastimonial = document.querySelectorAll(".review")
const slideDots = document.querySelectorAll(".dots");

const slideWidth = tastimonial[0].getBoundingClientRect().width;
console.log(slideWidth);

function slidePatternChanges(tastimonial, index) {
    tastimonial.style.left = slideWidth * index + "px";
}

tastimonial.forEach(slidePatternChanges);
let i = 0;
setInterval(() => {
    i++;
    tastimonial.forEach(tastimony => {
        if (i > tastimonial.length - 1) {
            i = 0;
            tastimony.style.transform = `translateX(${slideWidth * i}px)`;
        }
        else {
            tastimony.style.transform = `translateX(-${slideWidth * i}px)`;
        }
    })
    slideDots.forEach(dots => {
        if (dots.classList.contains("active"))
            dots.classList.remove("active");
    })
    slideDots[i].classList.add("active");
}, 5000);

function navToggle() {
    navMenu.classList.toggle("active");
}

navOpen.addEventListener("click", () => {
    navToggle();
    navOpen.style.display = "none";
    navClose.style.display = "block";
})
navClose.addEventListener("click", () => {
    navToggle();
    navOpen.style.display = "block";
    navClose.style.display = "none";
})