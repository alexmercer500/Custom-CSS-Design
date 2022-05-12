const menu = document.querySelector('.nav-toggle');
const navOpen = document.querySelector('.nav-open');
const navBar = document.querySelector('.nav-bar');

const upSection = document.querySelector('.nav-bar');
const scrollerLeft = document.querySelector('.intro-image');
const scrollerRight = document.querySelector('.intro-section-info');

const newsArt = document.querySelectorAll('.newsletter');
const newsHead = document.querySelector('.creative-articles');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navOpen.classList.toggle('active');
    navBar.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    if (window.scrollY > upSection.offsetHeight) {
        scrollerLeft.classList.add('scroller');
        scrollerRight.classList.add('scroller');
    }
    if (window.scrollY > newsHead.offsetHeight) {
        newsArt.forEach(artSec => {
            artSec.classList.add('fade-up');
        })
    }
})
