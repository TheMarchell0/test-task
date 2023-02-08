import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const salesSliders = document.querySelectorAll(".js-sale-slider");
const salesItemSliders = document.querySelectorAll(".js-sale-slider-item");
const productSliders = document.querySelectorAll(".js-product-slider-item");
let salesSlidersCount = 1;
let productSlidersCount = 1;
let salesPaginationSettings = [];

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 8; j++) {
    salesPaginationSettings.push({
      loop: true,
      pagination: {
        el: `.sale__slider-item-pagination_${i}-${j}`,
        clickable: true,
      },
    });
  }
}

const mainSlider = new Swiper("#main-slider", {
  loop: false,
  navigation: {
    nextEl: ".main-slider-button-next",
    prevEl: ".main-slider-button-prev",
  },
  pagination: {
    el: ".main-slider-pagination",
    clickable: true,
  },
  breakpoints: {
    1025: {
      allowTouchMove: false,
    },
  },
});

for (let item of salesSliders) {
  const salesSlider = new Swiper(item, {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    allowTouchMove: false,

    navigation: {
      nextEl: ` .js-sale-nav-${salesSlidersCount} .sale-slider-button-next`,
      prevEl: ` .js-sale-nav-${salesSlidersCount} .sale-slider-button-prev`,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        allowTouchMove: true,
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
    },
  });
  salesSlidersCount++;
}

for (let i = 0; i <= salesItemSliders.length; i++) {
  const salesSliderItem = new Swiper(
    salesItemSliders[i],
    salesPaginationSettings[i]
  );
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
