// Import the express and http libraries
const express = require('express');
const http = require('http');

// Create an instance of express and http server
const app = express();
const server = http.createServer(app);

// Import and setup socket.io
const io = require('socket.io')(server);

// Middleware to parse JSON bodies
app.use(express.json());

// Serve your webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Define a POST route
app.post('/your-endpoint', (req, res) => {
    console.log(req.body); // Log the request body
    io.emit('post_received', req.body); // Emit the body to all connected clients
    res.send('Received a POST request');
});

// Start the server
const port = 3000;
server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
