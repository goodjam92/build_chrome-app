-2.1 ~ 2.3-

const a = 5;
const b = 2;
let myName = "jammer";

/* Variable 변수 이름 (공백 부분은 다음 첫단어를 대문자로작성)
- const와 let의 차이점 
const   : 변수의 처음 값에서 변하지 경우
let     : 변수의 값에 업데이트가 필요한 경우 (let없이 변수=값 작성)
기본적으로 **const를 사용하고 값의 업데이트가 필요하면 가끔 let을 사용
---------------------------------------------------------------
*var    : 과거에 사용되었던 Variable 작성 방법 (사용 X)
*/

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "JM"; /* myName 변수의 값 업데이트 */

console.log("your new name is " + myName);



-2.4 variable type-

const amIFat = null;
let something;
console.log(something, amIFat);

/* 
type 용어 정리
true    : 1(on)
false   : 0(off)
null    : 아무것도 없음 (자연적으로 발생하지 않음 의도적으로 값을 넣는 것)
undefine: variable은 있지만 값이 정의되지 않음
*/



-2.5 Array-
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one moere day to the array
daysOfWeek.push("sund");

console.log(daysOfWeek);



- 2.6 object -

//object 작성방법
//const variable = {} 중괄호를 사용 (대괄호는 array 작성방법)
const player = {
  name: "jammer",
  points: 500,
  fat: true,
};

console.log(player);
//const 안에 있는 object의 값을 변경
player.fat = false;
player.points = player.points + 15;
//add in object
player.lastName = "potato";

//const의 값을 변경하지 못하는 것은 전체를 하나의 값으로서 업데이트 하려고 발생
//player = false;
console.log(player);



- 2.7~2.8 function -

()안의 값은 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "and I'am " + age);
}

sayHello("jammer", 30);
sayHello("Hamm", 22);
sayHello("Shin", 29);


const player = {
  name: "jammer",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + "nice to meet you");
  },
};

console.log(player.name);
player.sayHello("Lynn");



- 2.11~2.12 Return -

const age = 88;
//function에서 수행된 결과를 받아서 코드에 입력하려면 return을 해줘야 함.
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

//function에선 return이 수행되면 종료 됨.
const calculator = {
  plus: function (a, b) {
    console.log("hi hi");
    return a + b;
    console.log("bye bye");
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const pluseResult = calculator.plus(2, 3);
const minusResult = calculator.minus(pluseResult, 10);
const timesResult = calculator.times(5, minusResult);
const divideResult = calculator.divide(timesResult, pluseResult);
const powerResult = calculator.power(minusResult, divideResult);



- 2.13~2.15 Conditionals -

const age = parseInt(prompt("How old are you?"));
//parseInt() string을 number로 바꿔주는 function
//function의 실행 순서는 내부에서 외부로 진행된다.

//isNaN() Not a Number인지 아닌지 boolean type으로 말해줌.
if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
  //condition === true
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}



- 3.2 Searching For Elements - 

** querySelector (이걸로 99% 사용 예정)

Const title = document.querySelector(".hello h1")

//querySelector = CSS 스타일로 원하는 Elements를 받아올 수 있으며 동일한 이름을 갖는 
   여러개의 elements가 있을 경우 첫번째 element만 가져옴.
//querySelectorAll은 h1이 여러개일때 모든 조건에 부합하는 아이들을 찾아줌. (Array로 반환)

아래 내용은 참고만..
//getElementById, getElementsByTagName 등등으로 검색 할 순 있지만 원하는 elements를 가져오기엔 부적합
//동일한 elements가 있을 땐 array 형식으로 받아와서 object 형식처럼 사용 할 수 없음(내용 업데이트x)



- 3.3 ~ 3.5 Event - 

const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
  console.log("title was clicked");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleMouseWheel() {
  h1.style.color = "red";
}

function handleDblClick() {
  h1.innerText = "Do not Double clicked";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}
//자바스크립트는 여러 이벤트를 감지할 수 있음(listen)
h1.onclick = handleTitleClick;

//title.addEventListener("click(event type)", function) title에 클릭이 감지될 때 2번째 argument의 function이 실행 됨

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("mousewheel", handleMouseWheel);
h1.addEventListener("dblclick", handleDblClick);

//window의 이벤트를 감지할 수 있음 (ex:브라우저 창))

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);




- 3.7  CSS in Javascript -


 const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /*  
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass) = "";
  } else {
    h1.classList.add(clickedClass);
  }
  h1 태그의 classlist에 clicked가 있으면 제거, 없으면 추가 하는 문장
*/

  // 위의 5줄 문장을 아래의 한 줄로 나타낼 수 있음.
  // toggle = 태그의 classlist에 지정한 className이 없으면 추가하고, 반대로 있으면 제거함.
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);


- js 앱 만들기 시작 -

여기서 부터 파일에 직접 필기 하였음


