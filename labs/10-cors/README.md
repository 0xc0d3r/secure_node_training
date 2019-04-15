# Lab 10 - Cross-Origin Resource Sharing (CORS) Configuration

## Scenario

The Coinspread application architecture includes a separate web server to server static contents (running on the domain localhost:4000), and dedicated API server to serve the dynamic contents via REST endpoints (running on the domain localhost:3000). 

By default, the browser's Same-Origin-Policy prevents making XHR requests to the REST endpoints on the API server from the pages loaded from the web server. To facilitate these requests, the coinspread application server has enabled cors() middleware. As part of this lab, your mission is to examine the existing CORS configuration for any security weaknesses and make it more secure.

## Setup
1. Install the [cors](https://www.npmjs.com/package/cors#configuring-cors) package from npm:
`npm i cors --save`

## Tasks:

Here are the tasks for this lab

**Task 1: Examine existing CORS configurations**

In the server\app\app.middleware.js includes the `cors()` middleware before any routes are executed. It is configured as:

```javascript
    app.use(cors({
        origin: true,
        credentials: true
    }));
```

Analyze the CORS configuration from a hacker's perspective. Do you find any weakness? Refer to the [cors package documentation](https://www.npmjs.com/package/cors#configuration-options) for information on these configuration options.

**Task 2: Tighten the CORS configuration**

As the coinspread web server is the only domain that serves the static contents and scripts for the application, make the CORS configuration more strict to allow only the requests from scripts or pages originated from the coinspread web server - `http://localhost:4000`.

Verify the fix by starting the web server on a different domain. As just a port change qualifies for the domain change, start the web server (inside coinspread/web-server/app folder) by passing a PORT environment property with a value other than the one allowed in CORS configuration (4000). For example: `PORT=5000 npm start`.