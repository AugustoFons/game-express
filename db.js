require('dotenv').config();

const { createClient } = require('@libsql/client');

const tursoUrl = process.env.TURSO_DB_URL
const tursoToken = process.env.TURSO_DB_TOKEN

// Crea el cliente
const db = createClient({
    url: tursoUrl,
    authToken: tursoToken,
});

module.exports = db;
