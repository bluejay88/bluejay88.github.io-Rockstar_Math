const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database'); // Import database connection

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// User Signup/Login
app.post('/api/user/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
        `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`,
        [username, email, hashedPassword],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ userId: this.lastID });
        }
    );
});

app.post('/api/user/login', async (req, res) => {
    const { email, password } = req.body;
    db.get(
        `SELECT * FROM users WHERE email = ?`,
        [email],
        async (err, user) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!user) return res.status(400).json({ error: 'User not found' });

            const isValid = await bcrypt.compare(password, user.password_hash);
            if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

            res.status(200).json({ message: 'Login successful', user });
        }
    );
});

// Client Dashboard
app.get('/api/client/dashboard', (req, res) => {
    db.all(`SELECT * FROM users LIMIT 25`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ recentSignups: rows });
    });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
