import createTodoElement from "./CreateTodoElement.js";

const todosData = [];

function getTodo() {
  const todoInput = document.querySelector(".todo-input");
  const todo = todoInput.value.trim();
  todo && addTodo(todo);
  todoInput.value = "";
}

function addTodo(todo) {
  const todoData = { todo, isCompleted: false };

  const currentDate = new Date();

  const data = {
    date: currentDate,
    todos: [todoData],
  };

  let todosDataLength = todosData.length - 1;

  if (
    // todosData.length &&
    todosData[todosDataLength]?.date.toDateString() ===
    currentDate.toDateString()
  ) {
    todosData[todosDataLength].todos.push(todoData);
  } else {
    todosData.push(data);
  }

  todosDataLength = todosData.length - 1;
  const todosLength = todosData[todosDataLength].todos.length - 1;

  const { isCompleted } = todosData[todosDataLength].todos[todosLength];

  // adding todo to the dom
  const li = createTodoElement(todo, todosDataLength, todosLength, isCompleted);

  const currentType = document.querySelector(".clicked").innerText;
  if (currentType !== "COMPLETED") {
    document.querySelector(".todo-list").prepend(li);
  }

  localStorage.setItem("todos", JSON.stringify(todosData));
}

export { todosData, getTodo };
