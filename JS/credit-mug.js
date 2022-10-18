"use strict";

const topForm = document.querySelector("#top-form");
const payForm = document.querySelector("#user-form");
const coffeeImg = document.querySelector(".img");
const productName = document.querySelector(".prod-name");
const productDescription = document.querySelector(".prod-desc");

const typeInput = document.querySelector("#type");
const quantityInput = document.querySelector("#quantity");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const cardInput = document.querySelector("#card-info");
const address = document.querySelector("#address");
const submitbtn = document.querySelector("#payment-btn");
const fullForm = [firstName, lastName, cardInput, address, submitbtn];

let message = document.createElement("h2");
message.classList.add("workingcart");

cardSpaces();
