let heart = document.querySelector("#heart");
if (heart) {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("heart-clicked")) {
      heart.classList.remove("heart-clicked");
    } else {
      heart.classList.add("heart-clicked");
    }
  });
}

const swiperFilters = new Swiper(".swiper-filters", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 10,
});

const swiperVedettes = new Swiper(".swiper-featured-artworks", {
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "2.2",
  spaceBetween: 1,
});
