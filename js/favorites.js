const favli = document.querySelectorAll(".todo-sites__list li");

function moveFavLi() {
  this.style.transform = "translateY(-15px)";
  const favSpan = this.querySelector("span");
  favSpan.style.display = "block";
}

function resetFavLiPosition() {
  this.style.transform = "translateY(0)";
  const favSpan = this.querySelector("span");
  favSpan.style.display = "none";
}

favli.forEach((li) => {
  li.addEventListener("mouseover", moveFavLi);
  li.addEventListener("mouseout", resetFavLiPosition);
});
