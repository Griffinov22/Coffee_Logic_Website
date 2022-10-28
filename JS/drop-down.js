"use strict";

const nav = document.querySelector("#nav");

//dropdown
const dropDiv = document.createElement("div");
dropDiv.innerHTML = `<img id='hamburger' src='/images/hamburger-button.svg' alt='dropdown' />'`;

const mediaQuery = window.matchMedia("(max-width: 715px)");

function isPhone(e) {
  if (e.matches) {
    nav.insertAdjacentElement("beforeend", dropDiv);
  } else {
    if (nav.lastElementChild.nodeName == "DIV") {
      console.log("hello");
      nav.removeChild(nav.lastElementChild);
    }
  }
}

mediaQuery.addListener(isPhone);
isPhone(mediaQuery);
