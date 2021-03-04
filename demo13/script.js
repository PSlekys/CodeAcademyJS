const table = document.createElement("table");
table.classList.add("container");
document.body.append(table);

document.forms.splitter.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = event.target.elements.fullname.value.trim();

  if (fullname.split(" ").length < 2) {
    alert("Full name not submitted");
  } else {
    const name = fullname.split(" ")[0];
    const surname = fullname.replace(name, "").trim();

    const person = {
      firstname: name,
      lastname: surname,
    };

    displayItem(person);
  }
});

function displayItem(individual) {
  const tr = table.insertRow();

  const td1 = tr.insertCell();
  td1.textContent = individual.firstname;

  const td2 = tr.insertCell();
  td2.textContent = individual.lastname;
}
