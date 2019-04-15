# Lab 9 - Rate Limiting Requests

## Scenario

The Coinspread application could face a risk from Insecure Direct Object Reference, DDoS, and brute force attacks at any scale. Implement a rate limiter to protect the application.

## Setup
Install the 'rate-limiter-flexible' package from npm:
`npm i rate-limiter-flexible --save`

## Tasks:

Here are the tasks to add the rate limit protection to the coinspread application

**Task 1: Create a Rate Limiter middleware**
In the `app/app.rate.limter.js` create a rate limiter middleware that would allow up to 4 requests per second.
Use the in-memory strategy of the 'rate-limiter-flexible' npm package for the purpose of this lab. 
If the requests exceed the limit: 
 - block any further request from the same IP (use connection.remoteAddress property in the request) for 10 seconds.
 - Send a *Too Many Requests* error generated using the Boom package.

Refer to the [rate-limiter-flexible config details](https://www.npmjs.com/package/rate-limiter-flexible) if needed.

**Task 2: Protect application routes with middleware**

Now as you have created the rate limiter, lets use it to protect application routes. In the `server/app/app.middleware.js`, include the middleware before any routes get invoked.