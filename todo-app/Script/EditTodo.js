import { todosData } from "./AddTodo.js";
import editingDone from "./EditingTodoDone.js";

export default function editTodo(...args) {
  const [parentEl, todoDatasIndex, todoIndex, currentTodo, isCompleted] = args;

  function createElementAndAddClass(type, ...className) {
    const el = document.createElement(type);
    className.length && el.classList.add(...className);
    return el;
  }

  const input = createElementAndAddClass(
    "input",
    "todo-input",
    "w-[81.5%]",
    "scale-ani",
    "origin-center"
  );
  input.type = "text";
  input.spellcheck = false;
  input.value = currentTodo;
  input.addEventListener(
    "keydown",
    (event) =>
      event.key === "Enter" &&
      editingDone(parentEl, input.value, todoDatasIndex, todoIndex, isCompleted)
  );

  const doneBtn = createElementAndAddClass("button", "icon-btn", "fade-ani");
  const doneIcon = createElementAndAddClass("i", "fa-solid", "fa-circle-check");
  doneBtn.append(doneIcon);

  doneBtn.addEventListener("click", () =>
    editingDone(parentEl, input.value, todoDatasIndex, todoIndex, isCompleted)
  );

  parentEl.replaceChildren(input, doneBtn);
  input.focus();
}
