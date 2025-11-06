const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();

  const regex = /^[a-zA-Z0-9._%+-]+@stevens\.edu$/;

  if (!regex.test(email)) {
    errorMsg.textContent = "You must use a valid @stevens.edu email.";
    return;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userEmail", email);

  window.location.href = "index.html";
});
