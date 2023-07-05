const password = $("#password");
const signUpSubmitEl = $("#signUpModalButton");
const [liLower, liUpper, liNum, liSpec, liLen] =
  $("#passwordMessages").children();

password.on("change textInput input", (e) => {
  const userInput = e.target.value;
  //   console.log(userInput);
  const lenCheck = userInput.length > 8;
  const lowerCheck = /[a-z]/.test(userInput);
  const upperCheck = /[A-Z]/.test(userInput);
  const numCheck = /\d/.test(userInput);
  const specCheck = /[#$^+=!*()@%&]/.test(userInput);

  //min length of 8
  //1 lowercase
  //1 uppercase
  //1 number
  //1 special

  if (lenCheck) {
    $(liLen).addClass("hide");
  } else {
    $(liLen).removeClass("hide");
  }
  if (lowerCheck) {
    $(liLower).addClass("hide");
  } else {
    $(liLower).removeClass("hide");
  }
  if (upperCheck) {
    $(liUpper).addClass("hide");
  } else {
    $(liUpper).removeClass("hide");
  }
  if (numCheck) {
    $(liNum).addClass("hide");
  } else {
    $(liNum).removeClass("hide");
  }
  if (specCheck) {
    $(liSpec).addClass("hide");
  } else {
    $(liSpec).removeClass("hide");
  }

  if (lenCheck && lowerCheck && upperCheck && numCheck && specCheck) {
    console.log("password checks out, boss");
    signUpSubmitEl.attr("disabled", false);
  }
});
