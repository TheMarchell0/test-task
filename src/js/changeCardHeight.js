const cards = document.querySelectorAll(".sale__list-item");

for (let card of cards) {
  card.addEventListener("mouseenter", () => {
    this.style.maxHeight = "480px";
  });

  card.addEventListener("mouseleave", () => {
    this.style.maxHeight = "370px";
  });
}
