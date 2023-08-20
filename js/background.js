const backgroundSettings = [
  {
    backgroundImage: "../img/background01.png",
    fontStyle: "HakgyoansimBunpilR",
    fontMainColor: "white",
    fontSubColor: "black",
    timerBackColor: "#c4c4c4",
  },
  {
    backgroundImage: "background02.png",
    fontStyle: "KyoboHand",
    fontMainColor: "white",
    fontSubColor: "rgb(161, 0, 0)",
    timerBackColor: "#c4c4c4",
  },
  {
    backgroundImage: "background03.png",
    fontStyle: "KNPSKkomi-Regular00",
    fontMainColor: "black",
    fontSubColor: "skyblue",
    timerBackColor: "black",
  },
];
let chosenSettings =
  backgroundSettings[Math.floor(Math.random() * backgroundSettings.length)];

function onBackgroundSetting() {
  const chosenImage = chosenSettings.backgroundImage;
  document.querySelector("body").style.backgroundImage = `url(${chosenImage})`;

  const chosenFontStyle = chosenSettings.fontStyle;
  document.documentElement.style.setProperty("--font-style", chosenFontStyle);

  const chosenFontMainColor = chosenSettings.fontMainColor;
  document.documentElement.style.setProperty(
    "--main-font-color",
    chosenFontMainColor
  );

  const chosenFontSubColor = chosenSettings.fontSubColor;
  document.documentElement.style.setProperty(
    "--sub-font-color",
    chosenFontSubColor
  );

  const timerBackColor = chosenSettings.timerBackColor;
  document.documentElement.style.setProperty(
    "--timer-back-color",
    timerBackColor
  );
}

onBackgroundSetting();

/* background-switch__btn */
const backgroundGreenBtn = document.querySelector(
  ".background-switch__btn:first-child"
);
const backgroundBlackBtn = document.querySelector(
  ".background-switch__btn:nth-child(2)"
);
const backgroundWhiteBtn = document.querySelector(
  ".background-switch__btn:last-child"
);
backgroundGreenBtn.addEventListener("click", () => {
  chosenSettings = backgroundSettings[0];
  onBackgroundSetting();
});

backgroundBlackBtn.addEventListener("click", () => {
  chosenSettings = backgroundSettings[1];
  onBackgroundSetting();
});

backgroundWhiteBtn.addEventListener("click", () => {
  chosenSettings = backgroundSettings[2];
  onBackgroundSetting();
});
