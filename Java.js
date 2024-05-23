document.addEventListener('DOMContentLoaded', function() {
    // Registration
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.querySelector('input[name="first_name"]').value;
            const lastName = document.querySelector('input[name="last_name"]').value;
            const username = document.querySelector('input[name="username"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

            if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
                alert('Please fill all the fields!');
                return false;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return false;
            }

            const user = {
                firstName,
                lastName,
                username,
                email,
                password
            };

            localStorage.setItem('user', JSON.stringify(user));
            alert('Registration successful! Please login.');
            window.location.href = 'Login.html';
        });
    }

    // Login
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;

            const user = JSON.parse(localStorage.getItem('user'));

            if (!user || user.username !== username || user.password !== password) {
                alert('Invalid username or password');
                return false;
            }

            localStorage.setItem('loggedIn', 'true');
            alert('Login successful!');
            window.location.href = 'index.html';
        });
    }

    // Purchase
    const buyButtons = document.querySelectorAll('.buy-button');
    if (buyButtons) {
        buyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const loggedIn = localStorage.getItem('loggedIn');
                if (loggedIn !== 'true') {
                    alert('Please login to purchase the product');
                    window.location.href = 'Login.html';
                } else {
                    alert('Order successful!');
                }
            });
        });
    }
});
