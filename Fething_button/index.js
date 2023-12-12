let base_Url = "https://picsum.photos/v2/list";

let DynamicCard = (ele) => {
  const { author, download_url, url } = ele;
  return `<div class="card" style="width:18rem;">

        <img class="card-img-top" src=${url} alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${author}</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href=${download_url} class="btn btn-primary">Download</a>
        </div>
     </div>`;
};

document.addEventListener("DOMContentLoaded", function () {
  let targetDiv = document.querySelector(".con");
  fetch(base_Url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((ele) => {
        return (targetDiv.innerHTML += DynamicCard(ele));
      });
    });
});
