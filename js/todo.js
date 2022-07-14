const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// 처음엔 const ~ 라서 값이 업데이트가 되지 않았음.
// 이전 todo를 저장할 수 있도록 let으로 변경

// todo list값이 계속 저장될 수 있도록 localStorage 저장하는 function
function saveToDos() {
  // JSON.stringify() JS object, array등 어떤 것이든 값을 통째로 string으로 바꿔줌.
  // string 변환하는 이유 : localStorage에서 바로 배열처럼 저장이 안 됨.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo list 제거 function
function deleteTodo(event) {
  // 어떤 button의 click 이벤트가 일어날 때 button의 부모(li)를 찾아서 제거
  const li = event.target.parentElement;
  li.remove();
}

// list 및 button 생성, todo list 값을 저장하는 function
function paintToDo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  //append는 제일 마지막에 작성
  list.appendChild(span); // li 태그 안에 span(자식) 생성
  list.appendChild(button); // li 태그 안에 button(자식) 생성
  toDoList.appendChild(list); // ul 태그 안에 li(자식) 생성
}

// input 값을 todo list 값으로 보내기 위한 function
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //JSON.parse = String 을 array로 변환
  //앞쪽에서 String으로 변환된 값을 object로 만듦 (이 경우엔 array로 변환)
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 입력 된 todo 내용을 저장 함.
  console.log(parsedToDos);
  // forEach = 설정한 function을 각 배열에 있는 item마다 실행시켜줌
  // 화살표 함수(=>) function을 따로 작성하지 않고 간단하게 함수를 만들 수 있는 방법
  parsedToDos.forEach(paintToDo);
}
/* 위의 arrow function을 직접 작성해서 한다면 아래와 같음.
 function hellow(item) {
    console.log("this is the turn off", item);
 }
 두 방법 편한대로 사용하면 됨. 별 차이없음(처리 속도..등등)
*/
