const wines = JSON.parse(localStorage.getItem("wines"));
wines.sort((a, b) => b.year - a.year);
const table = document.querySelector("tbody");

function displayTable(array) {
  table.innerHTML = "";
  array.forEach((wine) => {
    const tr = table.insertRow();

    const td1 = tr.insertCell();
    td1.textContent = wine.name;

    const td2 = tr.insertCell();
    td2.textContent = wine.year;

    const td3 = tr.insertCell();
    td3.textContent = wine.location;

    const td4 = tr.insertCell();
    td4.textContent = wine.quantity;

    td4.addEventListener("click", () => {
      td4.textContent = wine.quantity - 1;

      wines.find((v) => v.name === wine.name).quantity--;

      localStorage.setItem("wines", JSON.stringify(wines));
    });
  });
}

displayTable(wines);

const input = document.querySelector("input");
input.addEventListener("keyup", () => {
  displayTable(
    wines.filter((v) =>
      v.name.toLowerCase().includes(input.value.toLowerCase())
    )
  );
});
