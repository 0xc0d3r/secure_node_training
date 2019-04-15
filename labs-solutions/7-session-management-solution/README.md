# Lab 7 - Session Management

## Scenario

The coinspread application needs a robust session management, to prevent a malicious user to impersonate other users. Your mission of this lab is to build session management using JSON Web Token (JWT).

## Setup

1. Verify the `jsonwebtoken` and `express-jwt` packages are included in the package.json inside the `coinspread\server` application.
2. When starting the server application, as part of the env variable pass these two values:
* JWT_SECRET: a secret key to sign the token 
* JWT_EXPIRES_IN: Desired token expiry time (e.g. '30m') 

```
export JWT_SECRET=mysupersecretkeyX
export JWT_EXPIRES_IN=30m
npm start

```

## Tasks:

As a starting point, the client-side angular Coinspread application is already implemented with these features:
* On a successful login, save the token received from the server in a local storage item `access_token`.
* For each outgoing request, include the token in the `authorization` request header.

As part of the following tasks, on the server side, you need to build utilities to create a JSON Web Token on a successful user signin, and validate a user-supplied token in each incoming request thereafter.


**Task 1: Build a utility to create the JSON Web Token from the given payload object**

The `api\util\auth.util.js` contains a placeholder for the `signToken()` function. 
As part of this task, implement this function to create a token using 
- payload object passed to the function
- secret key and expiry time provided in environment variables.

Hint: There is a [npm package](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback) for that!

**Task 2: Build a middleware to verify the JSON Web Token**

The `api\util\auth.util.js` contains a placeholder for the `requireValidToken()` function. 
Check [express-jwt](https://www.npmjs.com/package/express-jwt) for a function that takes secret and generates a middleware.

**Task 3: Verify that a user can log in from the Coinspead UI**

All other necessary logic to invoke the utilities created in above tasks is already coded in the application. At this point, you can start both the server and client/angular applications, and verify that a user can log in with a valid password. Next, grab the access_token in the local storage and inspect the contents using the [jwt debugger](https://jwt.io/).

**Quiz**

With a JWT based authentication in place, which of the following attacker's attempts would yield to a successful login as a victim user:

 *Attempt 1:*

 i. Login using the valid credentials.

 ii. Copy the token the application has set inside the local storage.

 iii. Using tool such as [jwt debugger](https://jwt.io/), change the id claim inside the token payload to the id of the victim user.

 iv. Copy the resultant encoded token value, and set it back inside the local storage item.

 *Attempt 2:*

 i. Intercept the traffic on an insecure network while the victim user is singning in into the target application.

 ii. Grab the jwt token transferred between the user and the server.

 iii. On an another computer, signin to the target application with amy valid id.

 iv. Replace the token in the local storage with the token stolen from the network traffic.

