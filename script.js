let date_in_future = new Date();

date_in_future.setMinutes(date_in_future.getMinutes() + 2);
let x;
function timer() {
  let date = new Date().getTime();
  let ms = date_in_future - date;
  let seconds = 59 - Math.floor((ms % (1000 * 60)) / 1000);
  let minutes = 1 - Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("time").innerHTML =
    "Вы находитесь на странице:" + minutes + " минут " + seconds + " секунд ";
  if (ms < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Страница устарела!";
  }
  x = setInterval(timer, 1000);
}
