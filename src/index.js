import "./styles.css";

document.getElementById("anime").innerHTML =
  "So Enjoy and Welcome to Wasseypur.";
bullet.onclick = function () {
  let height = gun.clientHeight - bullet.clientHeight;
  let width = 300;
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    bullet.style.left = timePassed / 5 + "px";

    if (timePassed > 3500) clearInterval(timer);
  }, 10);
};
