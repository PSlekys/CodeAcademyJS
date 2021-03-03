const table = document.querySelector("tbody");

document.forms.add.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.elements.fullname.value.trim();
  const price = Number(e.target.elements.price.value);

  const firstName = fullName.split(" ")[0];
  const lastName = fullName.replace(firstName, "").trim();

  const tr = table.insertRow();

  const td1 = tr.insertCell();
  td1.textContent = firstName;

  const td2 = tr.insertCell();
  td2.textContent = lastName;

  const td3 = tr.insertCell();
  td3.textContent = price.toFixed(2);
});
