document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector("#nav-bar").classList.toggle("show");
    document.querySelector("#nav-ul").classList.toggle("show-nav-ul")
});

document.querySelectorAll("#nav-ul li a").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector("#nav-bar").classList.remove("show");
        document.querySelector("#nav-ul").classList.remove("show-nav-ul");
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

showSlide(currentSlide);