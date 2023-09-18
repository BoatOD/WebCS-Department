const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const axios = require('axios');
const pdf = require('pdf-parse');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(cors());

// Import the dbconnect module
const { connectToDatabase } = require('./dbconnect');

app.use(async (req, res, next) => {
  try {
    // Connect to the database before processing the request
    const db = await connectToDatabase();
    req.db = db; // Make the database connection available in the request object
    next(); // Continue processing the request
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    // Access the database connection from the request object
    const db = req.db;

    // Access a collection and retrieve data
    const usersCollection = db.collection('inventory');
    // Return specific field
    const projection = { _id: 0};
    const users = await usersCollection.find({qty: {$lt: 50}}).project(projection).toArray();

    res.json(users);
  } catch (error) {
    console.error('Error fetching data from MongoDB Atlas:', error);
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

app.get('/api/home', async (req, res) => {
  try {
    res.json({ message: 'Like this video!', people: ['Arpan', 'Jack', 'Barry'] });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Connect to DB & Server started on port ${PORT}`);
})