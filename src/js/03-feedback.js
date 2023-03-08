import throttle from "lodash.throttle";
const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea")

const STORAGE_EMAIL = "feedback-form-state";

const formData = {};

const onInputChange = (e) => {
    formData[e.target.name] = e.target.value
        const data = localStorage.setItem(STORAGE_EMAIL, JSON.stringify(formData))
};

const populateInpute = () => {
    const inputData = localStorage.getItem(STORAGE_EMAIL);

    if(inputData) {
        const parsedData = JSON.parse(inputData);
        console.log(parsedData)
        inputEl.value = parsedData.email;
        textareaEl.value = parsedData.message
    }
}

populateInpute()

const onFormSubmit = (e) => {
    e.preventDefault();
    formEl.reset()
    localStorage.removeItem(STORAGE_EMAIL)
};

formEl.addEventListener('input', throttle(onInputChange, 500))
formEl.addEventListener('submit', onFormSubmit);