"use strict";

const nav = document.querySelector("#nav");
const banner = document.getElementById("banner");
const navList = document.querySelector("#nav-list");

const wrapper = document.querySelector(".wrapper");
const dropBtn = document.querySelector(".drop-btn");
const dropContent = document.querySelector(".drop-content");
const carsoel = document.querySelector("#div-carosel");

const mediaQuery = window.matchMedia("(max-width: 800px)");
const body = document.querySelector("body");

function isPhone(e) {
  if (e.matches) {
    nav.removeChild(navList);
    dropBtn.classList.remove("hidden");
  } else {
    banner.insertAdjacentElement("afterend", navList);
    dropBtn.classList.add("hidden");
  }
}

//setup smooth transition for all elements after drop down
for (let i = 2; i < body.children.length; i++) {
  body.children[i].style.transition = `transform 1s ease-in-out`;
}

function makeRoom(translateY) {
  // dropContent.clientHeight
  for (let i = 2; i < body.children.length; i++) {
    body.children[i].style.transform = `translateY(${translateY}px)`;
  }
}

mediaQuery.addListener(isPhone);
isPhone(mediaQuery);

let drop = true;

dropBtn.addEventListener("click", function (e) {
  //needed to continue checking
  if (drop) {
    dropContent.style.transform = `translateY(0%)`;
    dropContent.style.opacity = "1";
    makeRoom(dropContent.clientHeight);
    drop = false;
  } else {
    dropContent.style.transform = `translateY(-100%)`;
    makeRoom(0);
    drop = true;
  }
});
