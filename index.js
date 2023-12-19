function toggleForm() {
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');

    loginBox.style.display = (getComputedStyle(loginBox).display === 'none') ? 'block' : 'none';
    signupBox.style.display = (getComputedStyle(signupBox).display === 'none') ? 'block' : 'none';

    clearErrorMessages();
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation (in a real-world scenario, you'd use more secure methods)
    if (username === 'user' && password === 'password') {
        // Redirect to the main page after successful login
        window.location.href = 'main.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
}


function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const signupErrorMessage = document.getElementById('signup-error-message');

    // Simple validation (in a real-world scenario, you'd use more secure methods)
    if (newUsername.trim() === '' || newPassword.trim() === '') {
        signupErrorMessage.textContent = 'Username and password are required';
    } else {
        // Simulate account creation
        alert('Account created successfully!');
        clearErrorMessages();
        toggleForm(); // Switch to the login form after successful signup
    }
}

function clearErrorMessages() {
    document.getElementById('error-message').textContent = '';
    document.getElementById('signup-error-message').textContent = '';
}
