const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(cors());

// Import the dbconnect module
const connectToDatabase = require('./dbconnect');

app.get('/api/lecturer', async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();
    
    // Access a collection and retrieve data
    const usersCollection = db.collection('people');
    const users = await usersCollection.find({job_type: "L"}).toArray();

    res.json(users);
  } catch (error) {
    console.error('Error fetching data from MongoDB Atlas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/staff', async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();
    
    // Access a collection and retrieve data
    const usersCollection = db.collection('people');
    const users = await usersCollection.find({job_type: "S"}).toArray();

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

app.listen(PORT, () => {
  console.log(`Connect to DB & Server started on port ${PORT}`);
})