const dateInfo = document.querySelector(".date");

const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();
let todayDay = today.getDay();

switch (todayDay) {
  case 0:
    todayDay = "일";
    break;
  case 1:
    todayDay = "월";
    break;
  case 2:
    todayDay = "화";
    break;
  case 3:
    todayDay = "수";
    break;
  case 4:
    todayDay = "목";
    break;
  case 5:
    todayDay = "금";
    break;
  case 6:
    todayDay = "토";
    break;
}

dateInfo.innerHTML = `${todayYear}년 ${todayMonth}월 ${todayDate}일 (${todayDay})`;
