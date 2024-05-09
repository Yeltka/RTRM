const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Path to road map and simulation data
const mapData = require('./data/data.json');
const simData = require('./data/sim.json');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serving main html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Send map data as JSON when requested
app.get('/map-data', (req, res) => {
    res.json(mapData);
});

// Send simulation data as JSON when requested
app.get('/sim-data', (req, res) => {
    res.json(simData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});