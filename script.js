// --- Handle login button if exists (on login page) ---
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const message = document.getElementById('message');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (username === 'Dani Irfan' && password === '121221') {
            localStorage.setItem('isLoggedIn', 'true');
            message.textContent = `Welcome, ${username}!`;
            message.style.color = 'green';
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect after login
            }, 1000);
        } else {
            message.textContent = 'Incorrect name or password!';
            message.style.color = 'red';
        }
    });
}

// --- Handle logout ---
if (logoutBtn) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        logoutBtn.style.display = 'inline-block';
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        alert("You have been logged out.");
        window.location.href = "index.html";
    });
}
