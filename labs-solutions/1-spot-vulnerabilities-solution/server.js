// Include modules
const http = require('http');
const url = require('url');
const controller = require('./controller');
// Get port from env properties or set it a default port if not specified
const port = process.env.PORT || 3500;
// Create the server listening to port, all requests come through this first.
http.createServer(function (req, res) {
    console.log('Received a request...');
    req.urlParts = url.parse(req.url); if (req.urlParts.pathname !== '/api/v1/storage') {
        controller.terminate(res);
    } else {
        router(req, res);
    }
}).listen(port);
console.log(`Server running at http://localhost:${port}`);

// Delegate requests to controller functions as per the reqest method
const router = (req, res) => {
    switch (req.method) {
        case 'GET':
            controller.get(req, res);
            break;
        default:
            notFound(req, res);
            break;
    }
};

// Function to send Resource Not Found response for invalid paths
const notFound = (req, res) => {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('Resource not found!');
};