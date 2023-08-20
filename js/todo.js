const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form__input");
const toDoList = document.querySelector(".todo-list__todos");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("i");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecorationLine = "line-through";
    } else {
      span.style.textDecorationLine = "";
    }
  });

  button.className = "fa-solid fa-eraser fa-xs";
  button.addEventListener("click", deleteTodo);
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

/* checkbox 취소선 */
const checkClick = (i) => {
  if (
    toDoList.children[i].querySelector("span").style.textDecorationLine ===
    "line-through"
  ) {
    toDoList.children[i].querySelector("span").style.textDecorationLine = "";
  } else {
    toDoList.children[i].querySelector("span").style.textDecorationLine =
      "line-through";
  }
};

for (let i = 0; i < toDoList.childElementCount; i++) {
  toDoList.children[i].querySelector("input").value = i;
  toDoList.children[i]
    .querySelector("input")
    .setAttribute("onClick", `checkClick(${i})`);
}
