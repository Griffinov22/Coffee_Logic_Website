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

cardInput.addEventListener("keyup", function (e) {
  //stupid quick way of spacing out numbers for a credit card
  if ([4, 9, 14].includes(cardInput.value.length)) {
    cardInput.value += " ";
  }
});

payForm.addEventListener("submit", function (e) {
  // blanket statement that removes .basket
  if (message.classList.contains("basket")) message.classList.toggle("basket");

  if (typeInput.value == "default") {
    //putting the prevent here lets the form show that it is not filled if true
    e.preventDefault();
    message.textContent = "Please declare your type of beans. Thank you.";
    message.style.color = "red";
    payForm.insertAdjacentElement("beforeend", message);
  } else {
    e.preventDefault();
    message.textContent = "Your payment was successful!";
    message.style.color = "green";
    payForm.insertAdjacentElement("beforeend", message);
    //setting the form back to normal 'big fakey boi'
    fullForm.forEach((el) => {
      if (el == submitbtn) return;
      el.value = "";
    });
    typeInput.value = "default";
    quantityInput.value = "1";
  }
});

topForm.addEventListener("change", function () {
  // message.textContent = `Order-type: ${typeInput.value}\nQuantity: ${quantityInput.value}`;
  message.innerHTML = `<h2>Order-type: ${typeInput.value}<br/>
  Quantity: ${quantityInput.value}<br/><span id='final-price'>Final Price: $${
    Number(quantityInput.value) * 12.99
  }</span></h2>`;

  switch (typeInput.value) {
    case "blonde":
      message.style.color = "#e8894b";
      coffeeImg.src = "/images/Lantern Roast.png";
      productName.textContent = "Lantern Delight (Light Roast)";
      productDescription.textContent =
        "Lantern Delight features a citrusy chocolate aroma with a silky body, notes of caramel, and a lemony sweetness from Brazil. It has a pleasant finish of caramel and chocolate.";
      break;
    case "medium":
      message.style.color = "#179d57";
      coffeeImg.src = "/images/Liquid Logic Roast.png";
      productName.textContent = "Liquid Logic Roast (Medium Roast)";
      productDescription.textContent =
        "This coffee is extremely balanced, but playful, ranging from a deep cocoa and cardamom body to a candied, clementine sweetness. It is a single origin from El Salvador. The components marry together to create a beautiful harmony of flavors while still having enough depth to play nicely with milk. ";
      break;
    case "dark":
      message.style.color = "#2a3854";
      coffeeImg.src = "/images/Night Owl Roast.png";
      productName.textContent = "Night Owl Roast (Dark Roast)";
      productDescription.textContent =
        "Our Night Owl Roast is a blend is a polished coffee with a bold heart, rich character, and spicy notes resembling sweet pipe tobacco and dark chocolate with a bittersweet, soft finish.";
      break;
  }
  message.classList.add("basket");
  topForm.insertAdjacentElement("afterend", message);
});
