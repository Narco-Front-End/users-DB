const form = document.querySelector('.form');
const list = document.querySelector(".list");
const button = document.querySelector(".form__button");
let firstName = document.querySelector('.first-name');
let lastName = document.querySelector('.last-name');
const deleteButton = document.querySelector(".delete__element")

let arrayOfUsers = [];
if (localStorage.getItem("list")) {
  arrayOfUsers = JSON.parse(localStorage.getItem("list"));
  displayUser();
}
button.addEventListener("click", () => {
  let user = {
    name: firstName.value,
    lastName: lastName.value
  }
  arrayOfUsers.push(user);
  displayUser();
  localStorage.setItem("list", JSON.stringify(arrayOfUsers));
});


function displayUser() {
  let displayUser = "";
  arrayOfUsers.forEach((item, index) => {
    displayUser += `<li id="item_${index}">
                    <p>${item.name}</p>
                    <p>${item.lastName}</p>
                    <button class="delete__element">Delete </button>
                    </li>`;
    list.innerHTML = displayUser;
    firstName.value = "";
    lastName.value = "";
  })
}

function deleteUser(event) {
  if (event.target.className === "delete__element") {
    const parentElement = event.target.closest('li');
    parentElement.remove();
  }
}

list.addEventListener('click', deleteUser);






