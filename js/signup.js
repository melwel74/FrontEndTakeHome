const form = document.querySelector('form');
const fullNameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const occupationInput = document.querySelector('#occupation');
const stateInput = document.querySelector('#state');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const occupation = occupationInput.value;
  const state = stateInput.value;

  if (!fullName || !email || !password || !occupation || !state) {
    alert('All fields are required!');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Invalid email address!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long!');
    return;
  }

  // If all validation checks pass, submit the form
  form.submit();
});

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


fetch('https://frontend-take-home.fetchrewards.com/form')
  .then((response) => response.json())
  .then((data) => {
    // Extract the occupation and state options from the data
    const occupationOptions = data.occupationOptions;
    const stateOptions = data.stateOptions;

    // Get the select elements
    const occupationSelect = document.querySelector('#occupation');
    const stateSelect = document.querySelector('#state');

    // Add the options to the select elements
    occupationOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      occupationSelect.appendChild(optionElement);
    });
    stateOptions.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      stateSelect.appendChild(optionElement);
    });
  });
