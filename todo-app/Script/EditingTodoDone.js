import { todosData } from "./AddTodo.js";
import createTodoElement from "./CreateTodoElement.js";

export default function editingDone(...args) {
  const [parentEl, value, todoDatasIndex, todosIndex, isCompleted] = args;

  const editedTodo = value.trim();

  if (!editedTodo) return;

  const li = createTodoElement(
    editedTodo,
    todoDatasIndex,
    todosIndex,
    isCompleted
  );
  parentEl.replaceWith(li);

  todosData[todoDatasIndex].todos[todosIndex].todo = editedTodo;

  localStorage.setItem("todos", JSON.stringify(todosData));
}
