const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'App is running!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Web app is running at http://localhost:${port}`);
});
