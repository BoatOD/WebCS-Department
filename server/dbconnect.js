const { MongoClient } = require('mongodb');

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    return client.db("inventory-system"); // Replace with database name
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  }
}

// Handle SIGTERM signal gracefully
process.on('SIGTERM', async () => {
  try {
    console.log('Received SIGTERM. Closing the database connection...');

    // Close the MongoDB Atlas client connection gracefully
    await client.close();

    console.log('MongoDB Atlas connection closed.');

    process.exit(0); // Exit the process gracefully
  } catch (error) {
    console.error('Error closing MongoDB Atlas connection:', error);
    process.exit(1); // Exit the process with an error code
  }
});

module.exports = { connectToDatabase, client };
