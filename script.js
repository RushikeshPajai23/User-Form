const form = document.getElementById("form");
const username = document.getElementById("username");
const number = document.getElementById("number");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const numberValue = number.value.trim();
  const emailValue = email.value.trim();
  const dobValue = dob.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (numberValue === '') {
    setError(number, 'Number is required');
  } else if (isNaN(numberValue)) {
    setError(number, 'Please enter a valid number');
  } else if (numberValue.length !== 10 || !/^\d{10}$/.test(numberValue)) {
    setError(number, 'Number must be a 10-digit integer');
  } else {
    setSuccess(number);
  }
  
  
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (dobValue === "") {
    setError(dob, "Please enter dob");
  } else {
    setSuccess(dob);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
  // Check if all fields are valid
 if (
  username.parentElement.classList.contains('success') &&
  number.parentElement.classList.contains('success') &&
  email.parentElement.classList.contains('success') &&
  password.parentElement.classList.contains('success') &&
  password2.parentElement.classList.contains('success')
) {
  // Show success message
  alert('Registration successful!');
  // Reset form
  form.reset();
}
};
