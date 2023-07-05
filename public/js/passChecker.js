const password = $("#password");
const signUpSubmitEl = $("#signUpModalButton");
const [liLower, liUpper, liNum, liSpec, liLen] =
  $("#passwordMessages").children();

const liSpan1 = $("#liSpan1");
const liSpan2 = $("#liSpan2");
const liSpan3 = $("#liSpan3");
const liSpan4 = $("#liSpan4");
const liSpan5 = $("#liSpan5");

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
    $(liLen).addClass("passwordMessageGreen");
    $(liLen).removeClass("passwordMessageRed");
    liSpan5.text("✓ ");
  } else {
    $(liLen).addClass("passwordMessageRed");
    $(liLen).removeClass("passwordMessageGreen");
    liSpan5.text("X ");
  }
  if (lowerCheck) {
    $(liLower).addClass("passwordMessageGreen");
    $(liLower).removeClass("passwordMessageRed");
    liSpan1.text("✓ ");
  } else {
    $(liLower).addClass("passwordMessageRed");
    $(liLower).removeClass("passwordMessageGreen");
    liSpan1.text("X ");
  }
  if (upperCheck) {
    $(liUpper).addClass("passwordMessageGreen");
    $(liUpper).removeClass("passwordMessageRed");
    liSpan2.text("✓ ");
  } else {
    $(liUpper).addClass("passwordMessageRed");
    $(liUpper).removeClass("passwordMessageGreen");
    liSpan2.text("X ");
  }
  if (numCheck) {
    $(liNum).addClass("passwordMessageGreen");
    $(liNum).removeClass("passwordMessageRed");
    liSpan3.text("✓ ");
  } else {
    $(liNum).addClass("passwordMessageRed");
    $(liNum).removeClass("passwordMessageGreen");
    liSpan3.text("X ");
  }
  if (specCheck) {
    $(liSpec).addClass("passwordMessageGreen");
    $(liSpec).removeClass("passwordMessageRed");
    liSpan4.text("✓ ");
  } else {
    $(liSpec).addClass("passwordMessageRed");
    $(liSpec).removeClass("passwordMessageGreen");
    liSpan4.text("X ");
  }

  if (lenCheck && lowerCheck && upperCheck && numCheck && specCheck) {
    console.log("password checks out, boss");
    signUpSubmitEl.attr("disabled", false);
  } else {
    signUpSubmitEl.attr("disabled", true);
  }
});
