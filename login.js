function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('USERS')) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // If user found, redirect to a welcome page
        window.location.href = 'welcome.html';
    } else {
        // If user not found, show an error message
        alert('Invalid email or password. Please try again.');
    }
}
