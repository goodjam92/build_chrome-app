const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
  {
    quote: "Growing old is mandatory; growing up is optional.",
    author: "Anonymous",
  },
  {
    quote: "G.R 하고 자빠졌네",
    author: "세종대왕",
  },
  {
    quote: "If you do not walk today, you'll have to run tomorrow",
    author: "Anonymous",
  },
  {
    quote: "He who has health has hope. He who has hope has everything",
    author: "Arab proverb",
  },
  {
    quote: "가볍게 움직이지 말라 침착하게 태산같이 무거이 행동하라",
    author: "충무공 이순신",
  },
  {
    quote:
      "모든 일에 있어서 시간이 부족하지 않을까를 걱정하지 말고 다만 내가 마음을 바쳐 최선을 다할 수 있을지 그것을 걱정하라",
    author: "조선 제22대 왕 정조",
  },
  {
    quote:
      "너의 죽음은 한 사람 것이 아니라 조선인 전체의 공분을 짊어지고 있는 것이다.",
    author: "안중근 의사 어머니의 편지에서..",
  },
  {
    quote: "진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다.",
    author: "도산 안창호",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/* Random 구현
Math.Random() -> float 형태로 랜덤한 숫자 표시 (1이하의 숫자)
Math.Round()  -> 소숫점 1자리에서 반올림 한 숫자를 돌려줌
Math.ceil()   -> 소숫점 1자리에서 올림을 한 숫자를 돌려줌
Math.floor()  -> 소숫점 1자리에서 내림을 한 숫자를 돌려줌
*/

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
