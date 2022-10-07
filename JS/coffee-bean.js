"use strict";

const coffeeImg = document.querySelector(".img");

const [type, quantity] = document.querySelectorAll(".dropdown");

type.addEventListener("change", function (e) {
  switch (type.value) {
    case "blonde":
      coffeeImg.src = "/images/Lantern Roast.png";
      break;
    case "medium":
      coffeeImg.src = "/images/Liquid Logic Roast.png";
      break;
    case "dark":
      coffeeImg.src = "/images/Night Owl Roast.png";
      break;
  }
});
