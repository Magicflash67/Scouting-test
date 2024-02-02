// Import the express library
const express = require('express');

// Create an instance of express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a POST route
app.post('/your-endpoint', (req, res) => {
    console.log(req.body); // Log the request body
    res.send('Received a POST request');
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
