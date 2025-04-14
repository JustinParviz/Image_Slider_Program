// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


initializeSlider();

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

}

function prevSlide() {

}

function nextSlide() {

}




