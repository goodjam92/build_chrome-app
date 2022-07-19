const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginImage = document.querySelector("#login_box_size");
const loginGreeting = document.querySelector("#login-greeting");
//const logOutButton = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //preventDefault(); = 어떤 event의 기본 동작을 수행하지 않도록 막음
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginImage.classList.add(HIDDEN_CLASSNAME);
  loginGreeting.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // `` 백틱 사용
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //logOutButton.classList.remove(HIDDEN_CLASSNAME);
}

/*
function LogOutBtn() {
  localStorage.removeItem(USERNAME_KEY);
  logOutButton.classList.add(HIDDEN_CLASSNAME);
  window.location.reload();
}
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  loginImage.classList.add(HIDDEN_CLASSNAME);
  loginGreeting.classList.add(HIDDEN_CLASSNAME);
  // show the greetigns
}

//logOut.addEventListener("click", LogOutBtn);
