const selectMenu = document.querySelectorAll(".main-select-menu");

for (let selectMenuItem of selectMenu) {
  const isCitySelect = selectMenuItem.classList.contains(
    "main-select-menu_location"
  );
  const select = selectMenuItem.querySelector(".main-select");
  const optionsList = selectMenuItem.querySelector(".main-select__list");
  const options = optionsList.querySelectorAll(".main-select__list-item");
  const arrow = select.querySelector(".main-select__arrow");
  const choice = select.querySelector(".main-select__choice");
  const selectedCity = readCookie("selected_city");
  const isSaleSelect = selectMenuItem.classList.contains(
    "sale__select-menu-list-item"
  );
  const wrapper = isSaleSelect
    ? selectMenuItem.closest(".sale__list-item-wrapper")
    : undefined;

  if (selectedCity == undefined || !isCitySelect) {
    choice.innerHTML = options[0].innerHTML;
    options[0].classList.add("selected");
  } else choice.innerHTML = selectedCity;

  choice.innerHTML =
    selectedCity == undefined || !isCitySelect
      ? options[0].innerHTML
      : selectedCity;
  select.addEventListener("click", (e) => {
    selectMenuItem.classList.toggle("active");
    arrow.classList.toggle("main-select__arrow_open");
    if (isSaleSelect) {
      wrapper.classList.add("sale__list-item-wrapper_open");
    }
  });

  options.forEach((option) => {
    if (option.innerHTML === selectedCity && isCitySelect) {
      option.classList.add("selected");
    }
    option.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("selected");
      });
      choice.innerHTML = option.innerHTML;
      option.classList.add("selected");
      selectMenuItem.classList.remove("active");
      arrow.classList.toggle("main-select__arrow_open");
      setTimeout(() => {
        if (!wrapper.matches(":hover")) {
          wrapper.classList.remove("sale__list-item-wrapper_open");
        }
      }, 100);
      if (isCitySelect) {
        writeCookie("selected_city", option.innerHTML, 30);
      }
    });
  });
}

function writeCookie(name, val, expires) {
  const date = new Date();
  date.setDate(date.getDate() + expires);
  document.cookie =
    name + "=" + val + "; path=/; expires=" + date.toUTCString();
}

function readCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
