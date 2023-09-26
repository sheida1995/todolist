const todos = [];

const todoInput = document.querySelector(".todo-input");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todolist");
const selectFilter = document.querySelector(".filter-todos");

// events
todoForm.addEventListener("submit", addNewTodo);
selectFilter.addEventListener("change" , filterTodos);

// function

function addNewTodo(e) {
  e.preventDefault();
// if add null string
  if (!todoInput.value)return null;
  const newTodo = {
    id:Date.now(),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(newTodo);
  createTodos(todos);


}
function createTodos(todos){
  let result ="";
  todos.forEach((todo) =>{
     result += `<li class="todo">
     <p class="todo-title">${todo.title}</p>
     <button class="check-button"><i class="fa-sharp fa-solid fa-check"></i></button>
     <button class="trash-button"><i class="fa-solid fa-trash"></i></button>
   </li>`;
 
  });
  todoList.innerHTML = result;
  todoInput.value =""
}

function filterTodos(e){
  const filter = e.target.value;
  switch(filter){
    case"all":{
      createTodos(todos);
      break;

    }
    case"completed":{
      const filteredTodos = todos.filter((t)=> t.isCompleted);
      createTodos(filteredTodos);
      break;

    }case"uncompleted":{
      const filteredTodos = todos.filter((t)=> !t.isCompleted);
      createTodos(filteredTodos);
      break;

    }
    default:
      createTodos(todos);
    
  }
}