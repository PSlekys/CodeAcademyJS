const wines = JSON.parse(localStorage.getItem("wines"));
const dropdown = document.querySelector("select");

wines.forEach((wine) => {
  const option = document.createElement("option");
  option.value = wine.name;
  option.textContent = wine.name;
  dropdown.append(option);
});

document.forms.add.addEventListener("submit", (event) => {
  event.preventDefault();

  const wine = event.target.elements.name.value;
  const quantity = Number(event.target.elements.quantity.value);

  const wines = JSON.parse(localStorage.getItem("wines")) || [];

  wines.find((v) => v.name === wine).quantity += quantity;

  localStorage.setItem("wines", JSON.stringify(wines));
});
