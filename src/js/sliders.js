import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const salesSliders = document.querySelectorAll(".js-sale-slider-item");
const productSliders = document.querySelectorAll(".js-product-slider-item");
let saleSlidersCount = 1;
let productSlidersCount = 1;

const mainSlider = new Swiper("#main-slider", {
  loop: true,
  navigation: {
    nextEl: ".main-slider-button-next",
    prevEl: ".main-slider-button-prev",
  },
  pagination: {
    el: ".main-slider-pagination",
    clickable: true,
  },
});

const salesSlider = new Swiper("#sale-slider", {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,

  navigation: {
    nextEl: ".sale-slider-button-next",
    prevEl: ".sale-slider-button-prev",
  },
});

for (let salesSlider of salesSliders) {
  const salesSliderItem = new Swiper(salesSlider, {
    loop: true,

    pagination: {
      el: `.sale__slider-item-pagination_${saleSlidersCount}`,
      clickable: true,
    },
  });
  saleSlidersCount++;
}

for (let productSlider of productSliders) {
  const productSliderItem = new Swiper(productSlider, {
    navigation: {
      nextEl: `.product-slider-button-next_${productSlidersCount}`,
      prevEl: `.product-slider-button-prev_${productSlidersCount}`,
    },
  });
  productSlidersCount++;
}

const productSlider = new Swiper("#product-slider", {
  loop: true,

  navigation: {
    nextEl: ".product-slider-button-next",
    prevEl: ".product-slider-button-prev",
  },
});
