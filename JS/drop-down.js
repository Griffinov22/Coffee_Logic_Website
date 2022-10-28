"use strict";

const nav = document.querySelector("#nav");

//dropdown
const dropDiv = document.createElement("div");
dropDiv.classList.add("dropdown-div");
dropDiv.innerHTML = `<svg width="32px" height="32px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z" id="XMLID_314_"/><path d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z" id="XMLID_315_"/><path d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z" id="XMLID_316_"/></svg>`;

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
