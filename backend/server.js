const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const uri = 'mongodb://127.0.0.1:27017/fpas';

// Database and Collection Names
const dbName = 'fpas'; // Replace with your actual database name
const collectionName = 'users'; // Replace with your collection name

// Connect to MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
}

connectDB();

// Login Endpoint
app.post('/login', async (req, res) => {
  const { userid, password } = req.body;

  if (!userid || !password) {
    return res.status(400).json({ message: 'Please provide userid and password.' });
  }

  try {
    const db = client.db(dbName);
    const users = db.collection(collectionName);

    // Find user in the database
    const user = await users.findOne({ userid: userid, password: password });

    if (user) {
      // Exclude password from the response
      const { password, ...userWithoutPassword } = user;
      res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
    } else {
      res.status(401).json({ message: 'Invalid userid or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/postdata', async (req, res) => {
  const { skillsets } = req.body;

  if (!skillsets || typeof skillsets !== 'object') {
    return res.status(400).json({ message: 'Invalid data format.' });
  }

  try {
    const db = client.db(dbName);
    const collection = db.collection(dataCollection);

    // Insert data into the collection
    const result = await collection.insertOne({ skillsets });
    res.status(201).json({ message: 'Data saved successfully', dataId: result.insertedId });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to GET Faculty Performance Data by Key
app.get('/getdata/:key', async (req, res) => {
  const { key } = req.params;

  try {
    const db = client.db(dbName);
    const collection = db.collection(dataCollection);

    // Find data in the collection
    const data = await collection.findOne({ [`skillsets.${key}`]: { $exists: true } });

    if (data) {
      res.status(200).json({ message: 'Data retrieved successfully', data: data.skillsets[key] });
    } else {
      res.status(404).json({ message: 'No data found for the given key.' });
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});