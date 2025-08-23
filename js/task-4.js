const formSub = document.querySelector(".login-form");

formSub.addEventListener("submit", handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  const form = e.target.elements;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const userInfo = {
    email: email,
    password: password,
  };

  console.log(userInfo);
  formSub.reset();
}
