const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#usernameInputSignup");
  const passwordEl = document.querySelector("#passwordInputSignup");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value.trim(),
      password: passwordEl.value.trim(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    //this will send user to homepage URL
    document.location.replace("/");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signupForm")
  .addEventListener("submit", signupFormHandler);
