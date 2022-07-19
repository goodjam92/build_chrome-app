const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
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
  //click 이벤트가 일어날 때 해당 부모(li)의id도 받아오는 것을 알 수 있음
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// list 및 button 생성, todo list 값을 저장하는 function(화면에 표시)
function paintToDo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id; // object에서 생성된 li의 id 받아오기
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  //이제 단순한 text가 아닌 object의 값으로 받아야 함.
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  //append는 제일 마지막에작성
  list.appendChild(button); // li 태그 안에 button(자식) 생성
  list.appendChild(span); // li 태그 안에 span(자식) 생성
  toDoList.appendChild(list); // ul 태그 안에 li(자식) 생성
}

// input 값을 todo list 값으로 보내기 위한 function
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // Date.now 랜덤한 숫자를 뽑아줌.
  };
  //리스트를 삭제하고자 할 때 어떤 리스트인지 알아야 하기 때문에 각 item 에 Id를 부여한다.
  //object를 만들어서 newTodo text값을 가져오고, 그 text에 id를 부여해준다
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //JSON.parse = String 을 array로 변환
  //앞쪽에서 String으로 변환된 값을 object로 만듦 (이 경우엔 array로 변환)
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 입력 된 todo 내용을 저장 함.
  // forEach = 설정한 function을 각 배열에 있는 item마다 실행시켜줌
  parsedToDos.forEach(paintToDo);
}

/* parsedToDos.forEach((item) => console.log("this is the turn off", item))
  // 화살표 함수(=>) function을 따로 작성하지 않고 간단하게 함수를 만들 수 있는 방법
 
  위의 arrow function을 직접 작성해서 한다면 아래와 같음.
 function hellow(item) {
    console.log("this is the turn off", item);
 }
 두 방법 편한대로 사용하면 됨. 별 차이없음(처리 속도..등등)
*/

/*
function sexyFilter() {
  // 새 array에서 object가 유지되려면 함수에서 반드시 true를 return해야 한다.
  // 만약 false를 return하면 array에서 기존 object가 유지되지 못함.
}

[1, 2, 3, 4].filter(sexyFilter);
sexyFilter(1) = 1
sexyFilter(2) = 2
sexyFilter(3) X 3 // 유지하지 못하고 1, 2, 4만 유지 됨.
sexyFilter(4) = 4
*/
