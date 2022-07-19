const images = ["a.jpg", "b.jpeg", "c.jpeg", "d.jpg"];
// javascript에서 먼저 작성하고 html로 보내는 방법

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html element(tag) 생성 from javascript
const bgImage = document.createElement("img");

// img 소스 불러오는 위치 설정
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("backgroundImage"); //css에서 가져오기위해 만듬.

// html의 body로 js에서 만든 img 태그를 보냄.
// append 가장 아래에 추가, prepend 가장 위에 추가
document.body.appendChild(bgImage);
