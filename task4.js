// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Ваш код ..

const form = document.querySelector(".array").getElementsByTagName("fieldset")[0].children;

const name = form[1].value;
const phoneNumber = form[2].value;
const dataOfBirth = form[3].value;
const emailAddress = form[4].value;

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};