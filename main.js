const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".submit");
const selectedRating = document.querySelector("#selectedRating");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thankYou-state");

ratings.forEach(rating => {
  rating.addEventListener("click", function () {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    rating.classList.add("checked");
    selectedRating.innerText = rating.innerText;
  });
});

function submitRating() {
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");
}

btn.addEventListener("click", submitRating);
