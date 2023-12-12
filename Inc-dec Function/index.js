let data = 0;
let para = (document.getElementById("data").innerHTML = data);
function Inc() {
  if (data >= 10) {
    return null;
  }
  return (para = document.getElementById("data").innerHTML = ++data || 0);
}

function Res() {
  return (para = document.getElementById("data").innerHTML = data = 0);
}

function Dec() {
  if (data <= 0) {
    return null;
  }
  return (para = document.getElementById("data").innerHTML = --data || 0);
}

document.querySelector(".inc").addEventListener("click", Inc);
document.querySelector(".res").addEventListener("click", Res);
document.querySelector(".dec").addEventListener("click", Dec);
