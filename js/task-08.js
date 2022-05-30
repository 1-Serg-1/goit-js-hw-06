const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

let user = {
    email: '',
    password: '',
};

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    if (formEl.email.value === "" || formEl.password.value === "") {
        return alert("Все поля должны быть заполнены!");
    } else {
        user.email = formEl.email.value;
        user.password = formEl.password.value;
    }
    event.currentTarget.reset();

    console.log(user);
};

