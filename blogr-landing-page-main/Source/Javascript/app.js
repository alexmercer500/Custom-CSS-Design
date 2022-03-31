// navigation bar menu handler

let navOpen = document.getElementById("open-menu");
let navClose = document.getElementById("close-menu");
let menuOpen = document.querySelector(".nav-list");
let subMenu = document.querySelectorAll(".subMenu")


navOpen.addEventListener("click", () => {
    navOpen.style.display = "none";
    navClose.style.display = "block";
})

navClose.addEventListener("click", () => {
    navClose.style.display = "none";
    navOpen.style.display = "block"
})

navOpen.addEventListener("click", () => {
    menuOpen.classList.toggle("nav-list-active");
})
navClose.addEventListener("click", () => {
    menuOpen.classList.remove("nav-list-active");
})
// Sub Menu opening and closing.


subMenu.forEach(menu => {
    menu.addEventListener("click", () => {
        if (menu.classList.contains("nav-expand-list-active")) {
            menu.classList.remove("nav-expand-list-active");
            menu.classList.remove("pointer-up")
        }
        else {
            subMenu.forEach(remove => {
                remove.classList.remove("nav-expand-list-active")
                remove.classList.remove("pointer-up")
            })
            menu.classList.add("nav-expand-list-active");
            menu.classList.add("pointer-up");
        }
    })
})
