const API_KEY = "562acebca3a9316b97edd72249c3b2a8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url) // url을 호출하는 명령 (바로 일어나지 않고 시간이 지난뒤 실행 됨)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // 날씨 아이콘 추가
      const icon = document.querySelector("#weather img");
      const weatherIconNo = data.weather[0].icon;
      icon.src = `img/icons/${weatherIconNo}.png`;

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} & ${data.main.temp}°`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
