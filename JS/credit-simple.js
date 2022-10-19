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

//document setup for responivene basket
let message = document.createElement("h2");
message.classList.add("workingcart");
message.innerHTML = `<h2>Order-type: ${productName.textContent}<br/>
Quantity: ${quantityInput.value}<br/><span id='final-price'>Final Price: $${
  Number(quantityInput.value) * 12.99
}</span></h2>`;
message.classList.add("basket");
message.style.color = "green";
topForm.insertAdjacentElement("afterend", message);
//

cardInput.addEventListener("keyup", function (e) {
  //stupid quick way of spacing out numbers for a credit card
  if ([4, 9, 14].includes(cardInput.value.length)) {
    cardInput.value += " ";
  }
});

quantityInput.addEventListener("change", function (e) {
  message.classList.add("workingcart"); // sets up text
  message.classList.add("basket"); // specifically for topform
  message.innerHTML = `<h2>Order-type: ${productName.textContent}<br/>
Quantity: ${quantityInput.value}<br/><span id='final-price'>Final Price: $${
    Number(quantityInput.value) * 12.99
  }</span></h2>`;
  message.style.color = "green";
  topForm.insertAdjacentElement("afterend", message);
});

payForm.addEventListener("submit", function (e) {
  // blanket statement that removes .basket
  e.preventDefault();
  if (message.classList.contains("basket")) message.classList.toggle("basket");

  message.textContent = "Your payment was successful!";
  message.style.color = "green";
  payForm.insertAdjacentElement("beforeend", message);
  //setting the form back to normal 'big fakey boi'
  fullForm.forEach((el) => {
    if (el == submitbtn) return;
    el.value = "";
  });
  quantityInput.value = "1";
});
