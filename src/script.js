const pages = document.querySelectorAll("section");
const mainPage = document.querySelector("#main-page");
const mainGallery = document.querySelector("#main-gallery");

let currentPage = 0;
let scrollTrack = 0;

console.log("here");

mainPage.addEventListener('scroll', reveal);

function reveal() {
    let scrollDownText = document.querySelector('#scroll-down');
    scrollDownText.style.display = "none";
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

mainGallery.addEventListener('scroll', (event) => {
    console.log('xd');
});