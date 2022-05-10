const quotes = [
  {
    quote:
      "목적을 이루기 위해서 오랜 인내를 하기보다는 눈부신 노력을 하는 편이 쉽다.",
    author: "- 라 브뤼에르 -",
  },
  {
    quote:
      "사람을 강하게 만드는 것은 사람이 하는 일이 아니라, 하고자 노력하는 것이다.",
    author: "- 어니스트 헤밍웨이 -",
  },
  {
    quote: "하나의 작은 꽃을 만드는데도 오랜 세월의 노력이 필요하다.",
    author: "- W.블레이크 -",
  },
  {
    quote:
      "예부터 오늘에 이르기까지 인내와 노력이 따르지 않고 우러름을 받은 사람은 없다.",
    author: "- 뉴턴 -",
  },
  {
    quote:
      "화살이 과녁을 찾아가는 것이 아니라 활 쏘는 이가 과녁으로 화살을 보내는 것이다.",
    author: "- 이성계 -",
  },
  {
    quote: "일이 즐거움이라면 인생은 낙원이다. 일이 의무라면 인생은 지옥이다.",
    author: "- 고르키 -",
  },
  {
    quote: "생각하지 않고 읽는 것은 잘 씹지 않고 먹는 것과 같다.",
    author: "- 버어크 -",
  },
  {
    quote: "우리 인생은 우리들이 노력한 만큼 가치가 있다.",
    author: "- 모리악 -",
  },
  {
    quote: "노력에 집착하라. 숙명적인 노력을",
    author: "- 다빈치 -",
  },
  {
    quote:
      "항상 좋은 목적을 잃지 않고 노력을 계속하는 한 최후에는 반드시 구제된다.",
    author: "- 괴체 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
