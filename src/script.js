const form = document.querySelector('.form');
const list = document.querySelector(".list");
const button = document.querySelector(".form__button");
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
const removeElement = "╳";


button.addEventListener("click", (event) => {
  event.preventDefault();
  const listItem = document.createElement("li");
  listItem.append(firstName.value, " ", lastName.value, "  ", removeElement);
  list.append(listItem);
  firstName.value = " ";
  lastName.value = " ";
});

