document.addEventListener('DOMContentLoaded', function () {
    // You can add dynamic content loading or other interactions here
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Check login credentials
    if (username === 'EMERALD' && password === 'Pass12!@') {
        // Successful login
        redirectToExternalWebsite('https://emeraldtyres.github.io/Home/');
        clearLoginError();
    } else {
        // Failed login
        displayLoginError('Invalid username or password);
    }
}

function displayLoginError(message) {
    const loginError = document.getElementById('login-error');
    loginError.textContent = message;
}

function clearLoginError() {
    const loginError = document.getElementById('login-error');
    loginError.textContent = '';
}

function redirectToExternalWebsite(url) {
    // Redirect the user to the specified external website
    window.location.href = url;
}
