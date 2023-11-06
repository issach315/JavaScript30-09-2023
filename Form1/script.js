// const userNameEl = document.querySelector("#userName");
// const emailEl = document.querySelector("#email");
// const passwordEl = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirm-password");

// const form = document.querySelector("#signup");


// //isRequired() function returns true if the input argument is empty:
// const isRequired = value => value === '' ? false : true;


// //isBetween() function returns false if the length argument is not between the min and max argument:
// const isBetween = (length, min, max) => length < min || length > max ? false : true;


// //To check the email is valid, you’ll use a regular expression:
// const isEmailValid = (email) => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// };


// //To check if a password is strong, which match a specified pattern, you’ll also use a regular expression:
// const isPasswordSecure = (password) => {
//     const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return re.test(password);
// };



// const showError = (input, message) => {

//     //get form-field element 

//     const formField = input.parentElement;
//     //add error class

//     formField.classList.remove("success");
//     formField.classList.add("error");

//     //show the error msg

//     const error = formField.querySelector("small");
//     error.textContent = message;
// };



// const showSuccess = (input) => {

//     //get form-field element 

//     const formField = input.parentElement;
//     //add error class

//     formField.classList.remove("error");
//     formField.classList.add("success");

//     //show the error msg

//     const error = formField.querySelector("small");
//     error.textContent = "";
// };

// //validating the userName field
// const checkUsername = () => {

//     let valid = false;

//     const min = 3,
//         max = 25;

//     const username = usernameEl.value.trim();

//     if (!isRequired(username)) {
//         showError(usernameEl, 'Username cannot be blank.');
//     } else if (!isBetween(username.length, min, max)) {
//         showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
//     } else {
//         showSuccess(usernameEl);
//         valid = true;
//     }
//     return valid;
// };

// //validating the email
// const checkEmail = () => {
//     let valid = false;
//     const email = emailEl.value.trim();
//     if (!isRequired(email)) {
//         showError(emailEl, 'Email cannot be blank.');
//     } else if (!isEmailValid(email)) {
//         showError(emailEl, 'Email is not valid.')
//     } else {
//         showSuccess(emailEl);
//         valid = true;
//     }
//     return valid;
// };


// //validating the password
// const checkPassword = () => {
//     let valid = false;


//     const password = passwordEl.value.trim();

//     if (!isRequired(password)) {
//         showError(passwordEl, 'Password cannot be blank.');
//     } else if (!isPasswordSecure(password)) {
//         showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
//     } else {
//         showSuccess(passwordEl);
//         valid = true;
//     }

//     return valid;
// };

// //confirm-password

// const checkConfirmPassword = () => {
//     let valid = false;
//     // check confirm password
//     const confirmPassword = confirmPasswordEl.value.trim();
//     const password = passwordEl.value.trim();

//     if (!isRequired(confirmPassword)) {
//         showError(confirmPasswordEl, 'Please enter the password again');
//     } else if (password !== confirmPassword) {
//         showError(confirmPasswordEl, 'Confirm password does not match');
//     } else {
//         showSuccess(confirmPasswordEl);
//         valid = true;
//     }

//     return valid;
// };




// form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     e.preventDefault();

//     // validate fields
//     let isUsernameValid = checkUsername(),
//         isEmailValid = checkEmail(),
//         isPasswordValid = checkPassword(),
//         isConfirmPasswordValid = checkConfirmPassword();

//     let isFormValid = isUsernameValid &&
//         isEmailValid &&
//         isPasswordValid &&
//         isConfirmPasswordValid;

//     // submit to the server if the form is valid
//     if (isFormValid) {

//     }
// });














const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


