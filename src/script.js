const form = document.querySelector('.form');
const list = document.querySelector(".list");
const button = document.querySelector(".form__button");
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
const removeElement = "╳";
const item = document.querySelectorAll('li');


button.addEventListener("click", (event) => {
  event.preventDefault();
  const listItem = document.createElement("li");
  listItem.append(firstName.value, " ", lastName.value, "  ", removeElement);
  list.append(listItem);
  firstName.value = " ";
  lastName.value = " ";
})

list.onclick = (event) => {
  let target = event.target;
  if (target === removeElement) {
    item.forEach((element) => {
      element.pop();
    })
  }
}



