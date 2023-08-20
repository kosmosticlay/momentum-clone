const loginImages = ["idcard01.png", "idcard02.png"];

let sex = document.querySelector(".student-sex select");
const loginWrap = document.querySelector(".login-wrap");
const loginForm = document.querySelector("#login-form");
let greeting = document.querySelector(".user-info");

function idChange() {
  if (sex.value === "여") {
    loginForm.style.background = "url(../img/idcard01.png)";
  } else if (sex.value === "남") {
    loginForm.style.background = "url(../img/idcard02.png)";
  }
}

sex.addEventListener("change", idChange);

/* login 구현 */

function onLoginSubmit(event) {
  event.preventDefault();
  const loginInput = document.querySelector("#login-input");
  const username = loginInput.value;
  localStorage.setItem("usernamekey", username);
  greeting.innerHTML = `오늘 당번 : ${loginInput.value}`;
  loginForm.style.animation = "fadeaway 3s forwards";
  setTimeout(() => (loginWrap.style.display = "none"), 3100);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("usernamekey");

if (
  localStorage.usernamekey === null ||
  localStorage.usernamekey === undefined
) {
  loginWrap.style.display = "flex";
} else {
  greeting.innerHTML = `오늘 당번 : ${savedUsername}`;
  loginWrap.style.display = "none";
}

const clearUsernameBtn = document.querySelector(".today-user span");

clearUsernameBtn.addEventListener("click", () => {
  localStorage.removeItem("usernamekey");
  loginWrap.style.display = "none";
  window.location.reload();
});
