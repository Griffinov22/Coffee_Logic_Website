"use strict";

const nav = document.querySelector("#nav");
const banner = document.getElementById("banner");
const navList = document.querySelector("#nav-list");

const wrapper = document.querySelector(".wrapper");
const dropBtn = document.querySelector(".drop-btn");
const dropContent = document.querySelector(".drop-content");
const carsoel = document.querySelector("#div-carosel");

const mediaQuery = window.matchMedia("(max-width: 800px)");

function isPhone(e) {
  if (e.matches) {
    nav.removeChild(navList);
    dropBtn.classList.remove("hidden");
  } else {
    banner.insertAdjacentElement("afterend", navList);
    dropBtn.classList.add("hidden");
  }
}

mediaQuery.addListener(isPhone);
isPhone(mediaQuery);

dropBtn.addEventListener("click", function (e) {
  dropContent.classList.toggle("hidden");
  // carsoel.classList.toggle("pull-down");
});
