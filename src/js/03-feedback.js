const STORAGE_KEY = 'feedback-form-state';
const throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('.feedback-form [name="email"]'),
  messageInput: document.querySelector('.feedback-form [name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.emailInput.addEventListener('input', throttle(onFormInput, 500));
refs.messageInput.addEventListener('input', onFormInput);

onPageLoad();

function onFormSubmit(e) {
  e.preventDefault();

  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}

function onFormInput(e) {
  const data = {
    email: refs.emailInput.value,
    message: refs.messageInput.value,
  };

  saveToLS(data);
}

function onPageLoad() {
  const formData = loadFromLS(STORAGE_KEY);

  if (formData) {
    refs.emailInput.value = formData.email || '';
    refs.messageInput.value = formData.message || '';
  }
}

function saveToLS(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function loadFromLS(key) {
  const formData = localStorage.getItem(key);
  try {
    return JSON.parse(formData);
  } catch (error) {
    console.log(error);
  }
}
