let signupName = document.querySelector('.sign-up-name');
let signupEmail = document.querySelector('.sign-up-email');

const checkInputs = (input, value) => {
    if (value) {
        input.classList.add('not-empty');
    } else {
        input.classList.remove('not-empty');
    }
}

signupName.addEventListener('input', () => {
    checkInputs(signupName, signupName.value);
});

signupEmail.addEventListener('input', () => {
    checkInputs(signupEmail, signupName.value);
});