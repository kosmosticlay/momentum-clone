window.onload = function () {
  const popupView = document.querySelector(".how-to-use-popup");
  document.querySelector(".how-to-use").addEventListener("click", function () {
    popupView.style.display = "flex";
    setTimeout(() => {
      popupView.style.opacity = "1";
    }, 10);
  });
  document
    .querySelector(".popup__close")
    .addEventListener("click", function () {
      popupView.style.opacity = "0";
      setTimeout(() => {
        popupView.style.display = "none";
      }, 1000);
    });
};
