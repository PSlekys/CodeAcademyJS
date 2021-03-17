document.forms.register.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim().toLowerCase();
  const password = event.target.elements.password.value;

  const array = JSON.parse(localStorage.getItem("login")) || [];

  array.push({ email, password });

  localStorage.setItem("login", JSON.stringify(array));
});
