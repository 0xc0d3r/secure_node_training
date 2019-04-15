const express = require('express');
const path = require('path');
const http = require('http');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 4000;

// LAB TASK 2: Add CSP 
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com/css'],
        scriptSrc: ["'self'", "'unsafe-eval'"],
        fontSrc: ['https://fonts.gstatic.com'],
        connectSrc: ['http://localhost:3000']
    }
}));

app.use(express.static(path.join(__dirname, 'dist/angular')));

http.createServer(app).listen(port, () => console.log(`Started server on ${port}`));