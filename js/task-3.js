"use strict";


const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", () => {
    const nameOutput = document.querySelector("#name-output");

    // Если значение инпута, очищеное от пробелов по краям, не пустое,
    // то задать аутпуту значение очищеного инпута,
    // иначе задать аутпуту значение "Anonymous".
    nameInput.value.trim() !== "" ? nameOutput.textContent = nameInput.value.trim() : nameOutput.textContent = "Anonymous";
});