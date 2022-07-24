const quotes = [
  {
    quote: "It does not dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
  },
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "It's not our abilities that show what we truly are. It is our choices.",
    author: "Albus Dumbledore",
  },
  {
    quote: "It is impossible to manufacture or imitate love.",
    author: "Horace Slughorn",
  },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    author: "Albus Dumbledore",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

/* Random 구현
Math.Random() -> float 형태로 랜덤한 숫자 표시 (1이하의 숫자)
Math.Round()  -> 소숫점 1자리에서 반올림 한 숫자를 돌려줌
Math.ceil()   -> 소숫점 1자리에서 올림을 한 숫자를 돌려줌
Math.floor()  -> 소숫점 1자리에서 내림을 한 숫자를 돌려줌
*/

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
