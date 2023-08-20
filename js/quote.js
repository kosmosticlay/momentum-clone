const quotes = [
  {
    quote: "눈부신 성취는 언제나 특별하지 않은 준비 뒤에 온다.",
    author: "로버트 슐러",
  },
  {
    quote: "가장 유능한 사람은 가장 배움에 힘쓰는 사람이다.",
    author: "괴테",
  },
  {
    quote: "고통을 주지 않는 것은 쾌락도 주지 않는다.",
    author: "몽테뉴",
  },
  {
    quote: "놓친 시간들은 돌아오지 않지만, 놓칠 시간들은 다가오고 있다.",
    author: "Anonymous",
  },
  {
    quote: "어떤 일이든 쉬워지기 전에는 어려운 법이다.",
    author: "토마스 풀러",
  },
  {
    quote: "실패란, 보다 현명하게 다시 시작할 수 있는 기회다.",
    author: "헨리 포드",
  },
  {
    quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
    author: "칭기즈칸",
  },
  {
    quote: "열등감을 느끼는 것은 자신이 그것에 동의했기 때문이다.",
    author: "엘리너 루스벨트",
  },
  {
    quote: "무언가를 시작하는 방법은 말하는 것을 멈추고 행동을 하는 것이다.",
    author: "월트 디즈니",
  },
  {
    quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    author: "토마스 제퍼슨",
  },
  {
    quote: "가격은 당신이 지불하는 것이고, 가치는 당신이 얻는 것이다.",
    author: "워렌 버핏",
  },
  {
    quote: "할 수 있다고 믿는 사람은 결국 그렇게 된다.",
    author: "샤론 드골",
  },
  {
    quote: "실패는 성공으로의 길에 놓여져 있는 새로운 도전이다.",
    author: "데일 카네기",
  },
  {
    quote: "어디를 가든 마음을 다해 가라.",
    author: "공자",
  },
  {
    quote: "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
    author: "오스카 와일드",
  },
  {
    quote: "한 때는 불가능 하다고 생각했던 것이 결국에는 가능한 것이 된다.",
    author: "K.오브라이언",
  },
  {
    quote:
      "시도해 보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다.",
    author: "푸블릴리우스 시루스",
  },
  {
    quote: "천재란 노력을 계속할 수 있는 재능이다.",
    author: "토머스 에디슨",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
  {
    quote: "목표를 보는 자는 장애물을 겁내지 않는다.",
    author: "한나 모어",
  },
];

const quoteText = document.querySelector(".quote__content__text");
const author = document.querySelector(".quote__content__author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteText.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
