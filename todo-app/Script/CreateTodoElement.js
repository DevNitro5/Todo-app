import editTodo from "./EditTodo.js";
import { todosData } from "./AddTodo.js";
import renderType from "./Type.js";

export default function createTodoElement(...args) {
  const [todo, todoDatasIndex, todoIndex, isCompleted] = args;
  const todoList = document.querySelector(".todo-list");

  function createElementAndAddClass(type, ...className) {
    const el = document.createElement(type);
    className.length && el.classList.add(...className);
    return el;
  }

  const li = createElementAndAddClass("li", "todo-item");

  const inputDiv = createElementAndAddClass("div");

  const input = createElementAndAddClass("input", "checkBox");
  input.type = "checkbox";
  input.checked = isCompleted;
  input.id = todoIndex;
  input.addEventListener("change", () => {
    todosData[todoDatasIndex].todos[todoIndex].isCompleted = input.checked;
    localStorage.setItem("todos", JSON.stringify(todosData));

    if (document.querySelector(".clicked").innerText === "ALL") return;

    todoList.removeChild(li);
  });

  const label = createElementAndAddClass("label", "todo");
  label.htmlFor = todoIndex;
  label.innerText = todo;

  inputDiv.append(input, label);

  const buttonDiv = createElementAndAddClass("div");

  const editButton = createElementAndAddClass("button", "icon-btn");
  const editIcon = createElementAndAddClass(
    "i",
    "fa-solid",
    "fa-pen-to-square"
  );
  editButton.append(editIcon);
  editButton.addEventListener("click", () =>
    editTodo(li, todoDatasIndex, todoIndex, todo, isCompleted)
  );

  const deleteButton = createElementAndAddClass("button", "icon-btn", "ml-3");
  const deleteIcon = createElementAndAddClass("i", "fa-solid", "fa-trash-can");
  deleteButton.addEventListener("click", () => {
    todosData[todoDatasIndex].todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todosData));

    renderType(document.querySelector(".clicked").innerText);
  });
  deleteButton.append(deleteIcon);

  buttonDiv.append(editButton, deleteButton);
  li.append(inputDiv, buttonDiv);
  return li;
}

