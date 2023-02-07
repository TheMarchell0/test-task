const tabs = document.querySelectorAll(".sale__tabs-item");
const saleContents = document.querySelectorAll(".sale__list");
const navigations = document.querySelectorAll(".js-sale-nav");

for (let tab of tabs) {
  const navigation = document.querySelector(`.js-sale-nav-${tab.dataset.show}`);

  tab.addEventListener("click", () => {
    if (!tab.classList.contains("active")) {
      for (let subTab of tabs) {
        subTab.classList.remove("active");
      }
      tab.classList.add("active");
    }
    for (let saleContent of saleContents) {
      const activeSlider = saleContent.classList.contains(
        `js-sale-slider-${tab.dataset.show}`
      );
      if (!saleContent.classList.contains("visually-hidden")) {
        saleContent.classList.add("visually-hidden");
        for (let navigationItem of navigations) {
          if (
            !navigationItem.classList.contains("visually-hidden") &&
            !navigationItem.classList.contains(
              `js-sale-nav-${tab.dataset.show}`
            )
          ) {
            navigationItem.classList.add("visually-hidden");
          }
        }
      }
      if (activeSlider) {
        saleContent.classList.remove("visually-hidden");
        navigation.classList.remove("visually-hidden");
      }
    }
  });
}
