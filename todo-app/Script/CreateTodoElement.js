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

// https://thewebdev.info/2021/09/12/how-to-append-multiple-child-elements-with-javascript/#:~:text=Elements%20with%20JavaScript-,To%20append%20multiple%20child%20elements%20with%20JavaScript,can%20use%20the%20append%20method.&text=Then%20we%20write%3A,')%20const%20listItem%20%3D%20document.
