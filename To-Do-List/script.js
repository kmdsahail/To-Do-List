const item = document.querySelector("#item");
const todobox = document.querySelector("#todobox");

item.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addtodo(this.value);
    this.value = "";
  }
});

const addtodo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  ${item}
  <i class="fa-solid fa-x"></i>
  `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove;
  });
  todobox.appendChild(listItem);
};
