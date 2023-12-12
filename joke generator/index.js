let Url = "https://api.quotable.io/random";

document.querySelector('#quoteButton').addEventListener("click", function () {
  let para = document.querySelector("#quoteText");
  fetch(Url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.content);
      return (para.innerHTML = data.content);
    });
});
