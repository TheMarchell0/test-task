document.addEventListener("DOMContentLoaded", function () {
  const timers = document.querySelectorAll(".js-timer");
  const timeNow = new Date();
  const deadline = new Date(
    timeNow.getFullYear(),
    timeNow.getMonth(),
    timeNow.getDate(),
    timeNow.getHours() + 12,
    timeNow.getMinutes() + 47
  );

  for (let timer of timers) {
    const $hours = timer.querySelector(".timer__hours");
    const $minutes = timer.querySelector(".timer__minutes");
    const $seconds = timer.querySelector(".timer__seconds");

    // id таймера
    let timerId = null;
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $hours.textContent = hours < 10 ? "0" + hours : hours;
      $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
      $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
      $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
      $minutes.dataset.title = declensionNum(minutes, [
        "минута",
        "минуты",
        "минут",
      ]);
      $seconds.dataset.title = declensionNum(seconds, [
        "секунда",
        "секунды",
        "секунд",
      ]);
    }
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
  }
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
});
