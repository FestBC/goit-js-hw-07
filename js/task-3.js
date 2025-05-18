"use strict";


const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", () => {
    const nameOutput = document.querySelector("#name-output");

    // Если значение инпута не пустое,
    // то задать аутпуту значение инпута,
    // иначе задать аутпуту значение "Anonymous".
    nameInput.value !== "" ? nameOutput.textContent = nameInput.value : nameOutput.textContent = "Anonymous";
});