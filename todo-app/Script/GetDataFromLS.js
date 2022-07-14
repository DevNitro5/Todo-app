import { todosData } from "./AddTodo.js";
import renderType from "./Type.js";

export default function getDataFromLocalStorageAndRender() {
  const todoFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

  if (!todoFromLocalStorage) return;

  todosData.push(...todoFromLocalStorage);

  todosData.forEach((todoData, index) => {
    todoData.date = new Date(todoData.date);
    if (todoData.date.toDateString() !== new Date().toDateString()) {
      todosData.splice(index, 1);
    }
  });

  renderType("ACTIVE");
}
