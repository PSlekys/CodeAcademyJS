// Create Table

const table = document.createElement("table");
table.classList.add("container");

const row = table.insertRow();

const th1 = document.createElement("th");
th1.textContent = "Name";

const th2 = document.createElement("th");
th2.textContent = "Surname";

row.append(th1, th2);
document.body.append(table);

// Listen for submit

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
    event.target.elements.fullname.value = "";
  }
});

// Function to add to table

function displayItem(individual) {
  const tr = table.insertRow();

  const td1 = tr.insertCell();
  td1.textContent = individual.firstname;

  const td2 = tr.insertCell();
  td2.textContent = individual.lastname;
}
