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

module.exports = connectToDatabase;
