let navLink = document.querySelector(".ham");
let navOpen = document.getElementById("nav-open");

navLink.addEventListener("click", () => {
    navOpen.classList.toggle("active");
})