"use strict";

const submitButton = document.querySelector(`.submit_button`);
const firstNameInput = document.querySelector(`#first_name_input`);
const lastNameInput = document.querySelector(`#last_name_input`);
const emailInput = document.querySelector(`#email_input`);
const passwordInput = document.querySelector(`#password_input`);
// console.log(submitButton);

const submitUser = () => {
  //   console.log(`Ala ma kota`);
  console.log(firstNameInput);
  console.log(firstNameInput.value);

  if (
    firstNameInput.value == `` ||
    lastNameInput.value == `` ||
    emailInput.value == `` ||
    passwordInput.value == ``
  ) {
    console.log(`eeeeeeee`);
  }

  //   console.log(lastNameInput);
  //   console.log(emailInput);
  //   console.log(passwordInput);
};

submitButton.addEventListener(`click`, submitUser);
