const timer = document.querySelector(".timer");
const mask = document.querySelector(".mask");
const setTimerForm = document.querySelector(".set-time");
const setHoursInput = document.querySelector(".set-time__input.hours");
const setMinutesInput = document.querySelector(".set-time__input.minutes");
const setSecondsInput = document.querySelector(".set-time__input.seconds");
const timerSettingText = document.querySelector(".timer-setting");
const initialTimeSet =
  parseInt(setHoursInput.value) +
  parseInt(setMinutesInput.value) +
  parseInt(setSecondsInput.value);

/* control buttons */
const setTimerBtn = document.querySelector(".set");
const restartTimerBtn = document.querySelector(".restart");
const startTimerBtn = document.querySelector(".start");
const stopTimerBtn = document.querySelector(".stop");
const resetTimerBtn = document.querySelector(".reset");

let currentTimeDuration = 0;

function setTimer(event) {
  event.preventDefault();
  let hours = parseInt(setHoursInput.value) * 3600;
  if (setHoursInput.value === "" || isNaN(hours)) {
    hours = 0;
  }

  let minutes = parseInt(setMinutesInput.value) * 60;
  if (setMinutesInput.value === "" || isNaN(minutes)) {
    minutes = 0;
  }

  let seconds = parseInt(setSecondsInput.value);
  if (setSecondsInput.value === "" || isNaN(seconds)) {
    seconds = 0;
  }
  currentTimeDuration = hours + minutes + seconds;
  timer.style.animationDuration = `${currentTimeDuration}s`;
  mask.style.animationDuration = `${currentTimeDuration}s`;

  timerSettingText.innerHTML = `세팅시간 : ${setHoursInput.value}시간 ${setMinutesInput.value}분 ${setSecondsInput.value}초`;
}

function stopTimer() {
  timer.style.animationPlayState = "paused";
  mask.style.animationPlayState = "paused";
}

function startTimer() {
  timer.style.animationPlayState = "running";
  mask.style.animationPlayState = "running";
}

function initialization() {
  // 애니메이션 상태를 paused로 설정합니다.
  timer.style.animationPlayState = "paused";
  mask.style.animationPlayState = "paused";

  // 애니메이션 속성들을 초기 상태로 되돌립니다.
  timer.style.animation = "none";
  mask.style.animation = "none";

  // 잠시 후 원래의 애니메이션 설정을 되돌립니다. 이렇게 하면 애니메이션의 현재 진행 상태가 초기 상태로 되돌아갑니다.
  setTimeout(() => {
    timer.style.animation = "";
    mask.style.animation = "";
    timer.style.animationDuration = `${currentTimeDuration}s`;
    mask.style.animationDuration = `${currentTimeDuration}s`;
  }, 10);
}

function resetTimer() {
  initialization();
  setHoursInput.value = "0";
  setMinutesInput.value = "0";
  setSecondsInput.value = "0";
}

function restartTimer() {
  initialization();
  setTimeout(startTimer, 20);
}
setTimerForm.addEventListener("submit", setTimer);
stopTimerBtn.addEventListener("click", stopTimer);
startTimerBtn.addEventListener("click", startTimer);
resetTimerBtn.addEventListener("click", resetTimer);
restartTimerBtn.addEventListener("click", restartTimer);
