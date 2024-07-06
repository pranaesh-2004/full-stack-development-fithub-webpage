function handlesubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve stored details from localStorage
    const storedEmail = localStorage.getItem('EMAIL');
    const storedPassword = localStorage.getItem('PASSWORD');

    // Log values for debugging
    console.log('Entered Email:', email);
    console.log('Entered Password:', password);
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);

    // Validate login credentials
    if (email === storedEmail && password === storedPassword) {
        // Redirect to the training page
        window.location.href = 'training.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}