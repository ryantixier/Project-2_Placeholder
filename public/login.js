const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#usernameInputLogin");
  const passwordEl = document.querySelector("#passwordInputLogin");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value.trim(),
      password: passwordEl.value.trim(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    //this will be where we send the user after logging in
    //.replace() is making a GET request to homepage URL
    document.location.replace("/");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#loginForm")
  .addEventListener("submit", loginFormHandler);
