// ================= ELEMENTS =================
const form = document.getElementById("signupForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const inputs = [fullname, email, password, confirmPassword];

// ================= REAL-TIME EMPTY CHECK =================
inputs.forEach(input => {
    input.addEventListener("blur", () => {
        checkEmpty(input);
    });

    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            validateField(input);
        }
    });
});

// ================= SUBMIT EVENT =================
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        alert("🎉 Account Created Successfully!");
        form.reset();

        document.querySelectorAll(".success").forEach(i => {
            i.classList.remove("success");
        });
    }
});

// ================= VALIDATION LOGIC =================
function validateField(input) {
    if (input.value.trim() === "") {
        setError(input, "This field is required");
        return false;
    }

    if (input === fullname) {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(input.value)) {
            setError(input, "Numbers are not allowed in name");
            return false;
        }
        if (input.value.trim().length < 3) {
            setError(input, "Name must be at least 3 characters");
            return false;
        }
    }

    if (input === email) {
        if (!validateEmail(input.value)) {
            setError(input, "Invalid email format");
            return false;
        }
    }

    if (input === password) {
        if (input.value.length < 8) {
            setError(input, "Password must be at least 8 characters");
            return false;
        }
    }

    if (input === confirmPassword) {
        if (input.value !== password.value) {
            setError(input, "Passwords do not match");
            return false;
        }
    }

    setSuccess(input);
    return true;
}

// ================= HELPER =================
function checkEmpty(input) {
    if (input.value.trim() === "") {
        setError(input, "This field is required");
    }
}

function setError(input, message) {
    const formGroup = input.parentElement;
    let error = formGroup.querySelector(".error-message");

    if (!error) {
        error = document.createElement("small");
        error.classList.add("error-message");
        formGroup.appendChild(error);
    }

    error.textContent = message;
    input.classList.add("error");
    input.classList.remove("success");
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error-message");

    if (error) error.textContent = "";
    input.classList.remove("error");
    input.classList.add("success");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(email.toLowerCase());
}










// // =================== FORM ELEMENTS ===================
// const form = document.getElementById("signupForm");
// const fullname = document.getElementById("fullname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm-password");

// // =================== SUBMIT EVENT ===================
// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let isValid = true;

//     // ========= FULL NAME VALIDATION =========
//     // only letters & space allowed
//     const nameRegex = /^[A-Za-z\s]+$/;

//     if (fullname.value.trim() === "") {
//         setError(fullname, "Full name is required");
//         isValid = false;
//     } 
//     else if (!nameRegex.test(fullname.value)) {
//         setError(fullname, "Numbers are not allowed in name");
//         isValid = false;
//     } 
//     else if (fullname.value.trim().length < 3) {
//         setError(fullname, "Name must be at least 3 characters");
//         isValid = false;
//     } 
//     else {
//         setSuccess(fullname);
//     }

//     // ========= EMAIL VALIDATION =========
//     if (email.value.trim() === "") {
//         setError(email, "Email is required");
//         isValid = false;
//     } 
//     else if (!validateEmail(email.value)) {
//         setError(email, "Email must contain @ and .com");
//         isValid = false;
//     } 
//     else {
//         setSuccess(email);
//     }

//     // ========= PASSWORD VALIDATION =========
//     if (password.value === "") {
//         setError(password, "Password is required");
//         isValid = false;
//     } 
//     else if (password.value.length < 8) {
//         setError(password, "Password must be at least 8 characters");
//         isValid = false;
//     } 
//     else {
//         setSuccess(password);
//     }

//     // ========= CONFIRM PASSWORD =========
//     if (confirmPassword.value === "") {
//         setError(confirmPassword, "Please confirm your password");
//         isValid = false;
//     } 
//     else if (confirmPassword.value !== password.value) {
//         setError(confirmPassword, "Passwords do not match");
//         isValid = false;
//     } 
//     else {
//         setSuccess(confirmPassword);
//     }

//     // ========= SUCCESS =========
//     if (isValid) {
//         alert("🎉 Account Created Successfully!");
//         form.reset();

//         // remove green borders after reset
//         document.querySelectorAll(".success").forEach(input => {
//             input.classList.remove("success");
//         });
//     }
// });

// // =================== HELPER FUNCTIONS ===================
// function setError(input, message) {
//     const formGroup = input.parentElement;
//     let small = formGroup.querySelector("small");

//     if (!small) {
//         small = document.createElement("small");
//         small.classList.add("error-message");
//         formGroup.appendChild(small);
//     }

//     small.textContent = message;
//     input.classList.add("error");
//     input.classList.remove("success");
// }

// function setSuccess(input) {
//     const formGroup = input.parentElement;
//     const small = formGroup.querySelector("small");

//     if (small) small.textContent = "";
//     input.classList.remove("error");
//     input.classList.add("success");
// }

// // email must contain @ and domain (.com, .net, etc)
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     return re.test(email.toLowerCase());
// }
