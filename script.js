const languageSelectors = document.querySelectorAll('.language-btn');

languageSelectors.forEach(select => {
    select.addEventListener('click', () => {
        console.log('Language button clicked');
    });
});

const emailInputs = document.querySelectorAll('input[type="email"]');

emailInputs.forEach(input => {
    const wrapper = input.parentElement;
    const errorDisplay = wrapper.querySelector('.error-message');

    input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
            wrapper.classList.add('filled');
        } else {
            wrapper.classList.remove('filled');
        }
    });

    input.addEventListener('blur', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(input.value)) {
            wrapper.classList.add('invalid');
            if (errorDisplay) errorDisplay.innerText = "Please enter a valid email address.";
        } else {
            wrapper.classList.remove('invalid');
            if (errorDisplay) errorDisplay.innerText = "";
        }
    });
});