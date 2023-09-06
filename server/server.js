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

// Define an API endpoint to fetch data
app.get('/api/data', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM EMPLOYEE ORDER BY ssn');
      const data = result.rows;
  
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/', async (req, res) => {
    try {
        res.send('Backend works.');
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Handle SIGTERM signal gracefully
process.on('SIGTERM', async () => {
    console.log('Received SIGTERM. Closing the database connection...');
    await client.end(); // Close the PostgreSQL client connection gracefully
    process.exit(0); // Exit the process gracefully
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})