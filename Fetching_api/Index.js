let base_Url = "https://randomuser.me/api/?results=50";


document.addEventListener("DOMContentLoaded", function () {
  let targetDiv = document.querySelector(".TargetedCard");
  fetch(base_Url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((ele) => {
        return (targetDiv.innerHTML += dynamicCard(ele));
      });
    });
});
