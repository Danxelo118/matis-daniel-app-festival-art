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


var swiperScreenshots = new Swiper('.swiper-screenshots', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',
  spaceBetween: 10,
});

var swiper = new Swiper('.swiper-screenshots', {
  slidesPerView: 1, 
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3, 
    }
  }
});
