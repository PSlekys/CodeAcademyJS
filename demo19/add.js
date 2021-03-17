document.forms.add.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value.trim();
  const year = Number(event.target.elements.year.value);
  const location = event.target.elements.location.value.trim();

  const wines = JSON.parse(localStorage.getItem("wines")) || [];

  wines.push({ name, year, location });

  localStorage.setItem("wines", JSON.stringify(wines));
});
