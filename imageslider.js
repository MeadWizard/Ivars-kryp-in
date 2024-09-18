// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    if(slides.length > 0){
        slides[slideindex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 5000);
        //console.log(intervalId);
    }
}

function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })

    slides[slideindex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideindex--;
    if(slideindex<0){
        slideindex = slides.length-1;
    }
    showSlide(slideindex);
}

function nextSlide(){
    clearInterval(intervalId);
    slideindex++;
    if(slideindex>slides.length-1){
        slideindex = 0;
    }
    showSlide(slideindex);
}