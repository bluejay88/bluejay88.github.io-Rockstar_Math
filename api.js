// User Signup
async function userSignup(username, email, password) {
    const response = await fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });
    return response.json();
}

// User Login
async function userLogin(email, password) {
    const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}

// Client Dashboard
async function fetchClientDashboard() {
    const response = await fetch('http://localhost:5000/api/client/dashboard');
    return response.json();
}
