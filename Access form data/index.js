function generateCard() {
  let form = document.getElementById("form");
  let formData = new FormData(form);
  let AllData = Object.fromEntries(formData);
  FillForm(AllData);
}

function FillForm(data) {
  let CardName = (document.getElementById("cardName").innerHTML =
    data.name || null);
  let Gender = (document.getElementById("Gender").innerHTML =
    data.gender || null);

  let cardLocation = (document.getElementById("cardLocation").innerHTML =
    data.location || null);
}
FillForm();
