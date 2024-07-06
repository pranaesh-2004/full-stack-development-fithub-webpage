function handlesubmit(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get user inputs
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const date = document.getElementById('date').value;
            const checkbox = document.getElementById('checkbox').checked;
            const gender = document.getElementById('gender').value;
            const feedback = document.getElementById('feedback').value;

            // Validate inputs
            if (email === '' || password === '' || date === '' || gender === '' || feedback === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem('USERS')) || [];

            // Add new user to the array
            users.push({ email, password, date, checkbox, gender, feedback });

            // Save updated users array to localStorage
            localStorage.setItem('USERS', JSON.stringify(users));

            // Redirect to the view page
            window.location.href = 'view.html';
        }