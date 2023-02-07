import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const salesSliders = document.querySelectorAll(".js-sale-slider");
const salesItemSliders = document.querySelectorAll(".js-sale-slider-item");
const productSliders = document.querySelectorAll(".js-product-slider-item");
let salesSlidersCount = 1;
let saleSlidersItemsCount = 1;
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

for (let item of salesSliders) {
  const salesSlider = new Swiper(item, {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    allowTouchMove: false,

    navigation: {
      nextEl: ` .js-sale-nav-${salesSlidersCount} .sale-slider-button-next`,
      prevEl: ` .js-sale-nav-${salesSlidersCount} .sale-slider-button-prev`,
    },
  });
  salesSlidersCount++;
}

for (let item of salesItemSliders) {
  const salesSliderItem = new Swiper(item, {
    loop: true,

    pagination: {
      el: `.sale__slider-item-pagination_${saleSlidersItemsCount}`,
      clickable: true,
    },
  });
  saleSlidersItemsCount++;
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
  allowTouchMove: false,

  navigation: {
    nextEl: ".product-slider-button-next",
    prevEl: ".product-slider-button-prev",
  },
});
