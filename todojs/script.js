const todos = [];

const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");

todoForm.addEventListener("submit", addNewTodo);

function addNewTodo(e) {
  e.preventDefault();
// if add null string
  if (!todoInput.value)return null;
  const newTodo = {
    id:Date.now(),
    createdAt: new Date().toISOString(),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(newTodo);

  let result ="";
 todos.forEach((todo) =>{
    result += `<li class="todo">
    <p class="todo-title">${todo.title}</p>
    <span class = "todo-ceratedAt>${new Date(todo.createdAt).toLocaleDateString("fa-IR")}</span>
    <button class="check-button"><i class="fa-sharp fa-solid fa-check"></i></button>
    <button class="trash-button"><i class="fa-solid fa-trash"></i></button>
  </li>`;

 });
 todoList.innerHTML = result;
}

