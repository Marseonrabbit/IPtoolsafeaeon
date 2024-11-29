const express = require('express');
const app = express();

// Define the ports you want the server to listen on
const ports = [18012, 18013, 19099];

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on each specified port
ports.forEach((port) => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
