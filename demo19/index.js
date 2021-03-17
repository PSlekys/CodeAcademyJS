document.forms.login.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim().toLowerCase();
  const password = event.target.elements.password.value;

  const array = JSON.parse(localStorage.getItem("login"));

  if (array.some((v) => v.email === email && v.password === password)) {
    location.replace("view.html");
  } else {
    alert("incorrect email or passwword");
  }
});
