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
    const lecturerCollection = db.collection('people');
    const lecturer = await lecturerCollection.find({ job_type: "L" }).toArray();

    res.json(lecturer);
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
    const staffCollection = db.collection('people');
    const staff = await staffCollection.find({ job_type: "S" }).toArray();

    res.json(staff);
  } catch (error) {
    console.error('Error fetching data from MongoDB Atlas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/research', async (req, res) => {
  try {

    const aggregationPipeline = [
      {
        $unwind: {
          path: '$researcher', // Unwind the researcher array
        },
      },
      {
        $lookup: {
          from: 'people', // The collection that you want to join with
          localField: 'researcher', // Field from the 'research' collection
          foreignField: 'e_id', // Field from the 'people' collection
          as: 'researcher_data', // Create a new array field 'researcher_data'
        },
      },
      {
        $unwind: {
          path: '$researcher_data', // Unwind the 'researcher_data' array
        },
      },
      {
        $group: {
          _id: '$_id', // Group by the original '_id' field of the 'research' collection
          topic: { $first: '$topic' }, // Preserve the 'topic' field
          description: { $first: '$description' }, // Include 'description' field from research
          researchers: {
            $push: {
              e_name: '$researcher_data.e_name', // Include 'e_name' field from people
              personal_web: '$researcher_data.personal_web', // Include 'personal_web' field from people
            },
          },
        },
      },
      {
        $sort: {
          topic: 1, // Sort by 'topic' field in ascending order (A-Z)
        },
      },
    ];

    // Connect to MongoDB Atlas using the function from dbconnect.js
    const db = await connectToDatabase();

    // Access a collection and retrieve data
    const researchCollection = db.collection('research');
    const research = await researchCollection.find({}).toArray();
    const result = await researchCollection.aggregate(aggregationPipeline).toArray();

    res.json(result);
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