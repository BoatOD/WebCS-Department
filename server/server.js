const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const axios = require('axios');
const pdf = require('pdf-parse');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(cors());

// Connect to DB api
const connectToDatabase = require('./dbconnect');

app.get('/api/users', async (req, res) => {
  try {
    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data (example: "users" collection)
    const usersCollection = db.collection('inventory');
    const users = await usersCollection.find(
      {
        'dim_cm.0': { $lt: 15 },
        'dim_cm.1': { $gt: 20 },
        'tags': { $size: 2 }
      },
      { '_id': 0, 'instock': 0 }
      );

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

// Define a route for accessing and extracting PDF data
app.get('/extract-under-header', async (req, res) => {
  const PDF_URL = 'https://www.science.cmu.ac.th/webthai/filedata/file/SCI-Curriculum/BS/BS-64/tqf2-com-64-checo.pdf'; // Replace with the PDF URL
  const targetHeader = '3. หลักสูตรและอาจารย์ผู้สอน'; // Replace with the target header text

  try {
    const response = await axios.get(PDF_URL, { responseType: 'arraybuffer' });
    if (response.status === 200) {
      const pdfBuffer = response.data;

      // Parse the PDF directly from the binary buffer
      const parsedData = await pdf(pdfBuffer);

      // Extracted text content from the PDF
      const pdfText = parsedData.text;

      // Find the starting index of the target header
      const headerIndex = pdfText.indexOf(targetHeader);

      if (headerIndex !== -1) {
        // Extract text from the header index to the end of the document
        const extractedText = pdfText.substring(headerIndex + targetHeader.length);

        //   // Send the extracted text as a response
        //   res.json({ extractedData: extractedText });
        // Send the extracted text as plain text
        res.send(extractedText);
      } else {
        res.status(404).send('Header not found');
      }
    } else {
      res.status(response.status).send('Failed to fetch PDF');
    }
  } catch (error) {
    console.error('Error fetching or parsing PDF:', error);
    res.status(500).send('Internal server error');
  }
});

// Handle SIGTERM signal gracefully
process.on('SIGTERM', async () => {
  console.log('Received SIGTERM. Closing the database connection...');
  await client.end(); // Close the PostgreSQL client connection gracefully
  process.exit(0); // Exit the process gracefully
});

app.listen(PORT, () => {
  console.log(`Connect to DB & Server started on port ${PORT}`);
})