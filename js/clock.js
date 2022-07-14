const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //padStart(padEnd) (string length, "string")
  //글자 길이를 1번째 인자로 정하고, 정해진 길이보다 짧으면 2번째 인자의 글자로 채움.
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// interval(function, ms) = 설정한 매 시간마다 무언가를 일어나게 할 때 사용
getClock();
setInterval(getClock, 1000);

// Timeout(function, ms) = 설정한 시간이 지나면 작동함
//setTimeout(sayHello, 5000);
