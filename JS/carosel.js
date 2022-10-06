"use strict";
const slides = document.querySelectorAll(".slide");
const rightSlider = document.querySelector("#right-btn");
const leftSlider = document.querySelector("#left-btn");
const caroselText = document.querySelector("#carosel-text");
let currentSlide = 0;

slides.forEach((el, ind) => {
  el.style.transform = `translateX(${100 * (ind - currentSlide)}%)`;
});

const showSlide = function (currentSlide) {
  slides.forEach((el, ind) => {
    el.style.transform = `translateX(${100 * (ind - currentSlide)}%)`;
  });

  currentSlide !== 0
    ? (caroselText.style.opacity = 0)
    : (caroselText.style.opacity = 1);
};

const nextSlide = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
};

rightSlider.addEventListener("click", nextSlide);
leftSlider.addEventListener("click", previousSlide);
