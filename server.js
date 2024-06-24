// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Read scroll message from file specified by SCROLL_MSG environment variable
const scrollMessageFile = path.join(__dirname, process.env.SCROLL_MSG || 'default.txt');
let scrollMessage = '';

if (fs.existsSync(scrollMessageFile)) {
    scrollMessage = fs.readFileSync(scrollMessageFile, 'utf8');
}

app.use(express.static('public'));

app.get('/scroll-message', (req, res) => {
    res.send(scrollMessage);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
