// Create web server and handle requests
// 1. Create web server
// 2. Handle requests

// 1. Create web server
const express = require('express');
const app = express();

// 2. Handle requests
// GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// Export module
module.exports = app;
