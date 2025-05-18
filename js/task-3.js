"use strict";


const nameInput = document.querySelector("#name-input"); // инпут.
const nameOutput = document.querySelector("#name-output"); // аутпут.

const valueOutput = nameOutput.textContent; // вэлью аутпута.


nameInput.addEventListener("input", () => {
    const trimmedValueInput = nameInput.value.trim(); // вэлью инпута, очищенное от пробелов.

    // Если значение инпута, очищеное от пробелов по краям, не пустое,
    // то задать аутпуту значение очищеного инпута,
    // иначе задать аутпуту значение "Anonymous".
    trimmedValueInput !== "" ? valueOutput = trimmedValueInput : valueOutput = "Anonymous";
});