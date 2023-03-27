const btn = document.querySelector(".submit");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thankYou-state");

function submitRating() {
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");
}

btn.addEventListener("click", submitRating);
