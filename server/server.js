const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');

const PORT = 8080;

app.use(cors());

const client = new Client({
    host: "db",
    user: "postgres",
    port: "5432",
    password: "root",
    database: "csproject"
});

client.connect();

app.get('/db', async (req, res) => {
    try {
        // const client = await pool.connect();
        const result = await client.query('SELECT 1');
        return res.send('<h1>db works.</h1>');
    } catch (err) {
        return res.send('<h1>db is broken.</h1>' + err.toString());
    }
});

app.get('/api/home', async (req, res) => {
    try {
        res.json({ message: 'Like this video!', people: ['Arpan', 'Jack', 'Barry'] });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/', async (req, res) => {
    try {
        res.send('Backend works.');
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})