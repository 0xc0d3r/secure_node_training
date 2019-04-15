const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'dist/angular')));

http.createServer(app).listen(port, () => console.log(`Started server on ${port}`));