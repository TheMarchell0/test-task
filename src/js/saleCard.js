const cards = document.querySelectorAll(".sale__list-item");

for (let card of cards) {
  const cardSelects = card.querySelectorAll(".sale__select-menu-list-item");
  const wrapper = card.querySelector(".sale__list-item-wrapper");

  card.addEventListener("mouseleave", () => {
    for (let cardSelect of cardSelects) {
      const arrow = cardSelect.querySelector(".main-select__arrow");
      if (
        cardSelect.classList.contains("active") ||
        !wrapper.matches(":hover")
      ) {
        cardSelect.classList.remove("active");
        arrow.classList.remove("main-select__arrow_open");
        wrapper.classList.remove("sale__list-item-wrapper_open");
      }
    }
  });
}
