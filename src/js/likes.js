const likeItems = document.querySelectorAll(".js-likes-item");
const likes = document.querySelector(".js-header-likes");
let likesCount = 23;

likes.innerHTML = likesCount;

for (let likeItem of likeItems) {
  likeItem.addEventListener("click", () => {
    const alreadySaved = likeItem.classList.contains("js-like-saved");
    likeItem.classList.toggle("js-like-saved");
    alreadySaved ? likesCount-- : likesCount++;
    likes.innerHTML = likesCount;
  });
}
