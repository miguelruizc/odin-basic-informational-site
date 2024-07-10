// Express implementation
const express = require('express');
const path = require('node:path');

const app = express();

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.get('/about', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.get('/contact-me', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, 'html', 'contact-me.html'));
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
});

app.listen(8080, () => console.log('Server running on port 8080'));
