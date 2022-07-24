var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

let firstScripTag = document.getElementsByTagName("script")[0];
firstScripTag.parentNode.insertBefore(tag, firstScripTag);
// YOUTUBE API 추가

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "TDdlPsjX08g",
    playerVars: {
      autoplay: 1,
      loop: 1,
      rel: 0,
    },
  });
}

const LIST_IDS = [
  { musicListName: "- Hedwig's Theme -", videoId: "TDdlPsjX08g" },
  { musicListName: "- That's Life -", videoId: "AeIGJbz6CJc" },
  { musicListName: "lo-fi PlayList", videoId: "XAwEz-_sg9k" },
];

const previousButton = document.querySelector("#backward");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#forward");

playButton.addEventListener("click", function () {
  player.playVideo();
});

pauseButton.addEventListener("click", function () {
  player.pauseVideo();
});

let currentList = 0;

nextButton.addEventListener("click", function () {
  if (currentList === LIST_IDS.length - 1) {
    currentList = 0;
  } else {
    currentList += 1;
  }
  player.loadVideoById(LIST_IDS[currentList].videoId);
  const musicListName = document.querySelector("#musicListName");
  musicListName.textContent = LIST_IDS[currentList].musicListName;
  console.log(LIST_IDS[currentList].videoId);
});

previousButton.addEventListener("click", function () {
  if (currentList === 0) {
    currentList = 2;
  } else {
    currentList -= 1;
  }
  player.loadVideoById(LIST_IDS[currentList].videoId);
  const musicListName = document.querySelector("#musicListName");
  musicListName.textContent = LIST_IDS[currentList].musicListName;
  console.log(LIST_IDS[currentList].videoId);
});
