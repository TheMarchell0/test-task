const cards = document.querySelectorAll(".sale__list-item");

for (let card of cards) {
  const cardSelects = card.querySelectorAll(".sale__select-menu-list-item");
  card.addEventListener("mouseleave", () => {
    for (let cardSelect of cardSelects) {
      const arrow = cardSelect.querySelector(".main-select__arrow");
      if (cardSelect.classList.contains("active")) {
        cardSelect.classList.remove("active");
        arrow.classList.remove("main-select__arrow_open");
      }
    }
  });
}
