import { todosData } from "./AddTodo.js";
import createTodoElement from "./CreateTodoElement.js";

export default function renderType(type) {
  if (!todosData.length) return;
  document.querySelector(".todo-list").innerHTML = "";

  todosData.forEach((todoData, todosDataIndex) => {
    if (!todoData.todos.length) return;

    todoData.todos.forEach((todoData, todoIndex) => {
      const { todo, isCompleted } = todoData;

      let li;
      switch (type) {
        case "ALL":
          li = createTodoElement(todo, todosDataIndex, todoIndex, isCompleted);
          document.querySelector(".todo-list").prepend(li);
          break;

        case "ACTIVE":
          if (isCompleted) return;
          li = createTodoElement(todo, todosDataIndex, todoIndex, isCompleted);
          document.querySelector(".todo-list").prepend(li);
          break;

        case "COMPLETED":
          if (!isCompleted) return;
          li = createTodoElement(todo, todosDataIndex, todoIndex, isCompleted);
          document.querySelector(".todo-list").prepend(li);
      }
    });
  });
}
