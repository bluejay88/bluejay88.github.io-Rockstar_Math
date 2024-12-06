const sqlite3 = require('sqlite3').verbose();

// Create database connection
const db = new sqlite3.Database('./rockstar_math.db');

// Create tables
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            profile_picture TEXT,
            sessions_remaining INTEGER DEFAULT 0,
            next_session TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS clients (
            client_id INTEGER PRIMARY KEY AUTOINCREMENT,
            active_students INTEGER DEFAULT 0,
            upcoming_session TEXT
        )
    `);
});

module.exports = db;
