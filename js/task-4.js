"use strict";


const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const email = loginForm.querySelector('[name="email"]');
    const password = loginForm.querySelector('[name="password"]');

    // Добавил трим и имэйлу на всякий случай, чтобы прошло по ТЗ.
    // На с. д. не имеет смысла добавлять, ибо там есть уже встроенная защита от пробелов в форме.
    // Паролю имеет смысл.
    if (email.value !== "" && password.value !== "") {
        console.log({email: email.value.trim(), password: password.value.trim()});
    } else {
        window.alert("All form fields must be filled in");
    }

    email.value = "";
    password.value = "";
});