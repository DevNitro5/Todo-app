import { getTodo } from "./AddTodo.js";
import getDataFromLocalStorageAndRender from "./GetDataFromLS.js";
import renderType from "./Type.js";

document.title += ` | ${new Date().toDateString()}`;

getDataFromLocalStorageAndRender();

document.querySelector(".add-todo-btn").addEventListener("click", getTodo);

document
  .querySelector("#todo-input")
  .addEventListener("keydown", (event) => event.key === "Enter" && getTodo());

document.querySelectorAll(".type-btn").forEach((btn) =>
  btn.addEventListener("click", (event) => {
    const { target } = event;
    if (target.classList.contains("clicked")) return;

    if (document.querySelector(".clicked")) {
      document.querySelector(".clicked").classList.remove("clicked");
    }

    target.classList.add("clicked");
    renderType(target.innerText);
  })
);
