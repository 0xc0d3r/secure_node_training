const express = require('express');
const path = require('path');
const http = require('http');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 4000;

// TODO LAB TASK 2: Add  Content-Security-Policy header to protect against malicious payload injection
// Use the helmet.contentSecurityPolicy module.

app.use(express.static(path.join(__dirname, 'dist/angular')));

http.createServer(app).listen(port, () => console.log(`Started server on ${port}`));