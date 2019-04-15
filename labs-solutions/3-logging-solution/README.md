
# Lab 3 - Logging

## Scenario

The Coinspread app already contains state-of-art logging setup, however, it needs security specific enhancements. It is leaking sensitive data in logs, not adding enough information on important user access events, as well as correlating logs entries to audit and trace the user action. Moreover, it is not safe against malicious user injecting Non-printable characters to forge the log entries.

In this lab, your mission is to tighten the security aspect of the Coinspread application logging.

## Setup

* Run `npm i` inside *server* and *client\angular* folders to download required node packages.
* Update *server/app/app.config.js* to reflect the URL for database and log file to be used for logging. Update the value of the `mongo_db_url` property if using a mLab DB.

```javascript
log: {
        mongo_db_url: 'mongodb://localhost/coinspread_logs',
        file_url: path.join(__dirname, '../logs/application.log')
}
```

## Tasks:

**Task 1: Add a unique id to each request**

While processing a user request, multiple synchronous and async events happen that adds entries to the log files. However, when the application is used by multiple users simultaneously, there is no way to link log entries to the requests, making it impossible to trace actions happened during a specific user request.

A good first step is to add a unique id to each request - in request header `X-Request-Id` or in a request property `req.id`. This would allow us to later include it in log entries. As part of this task, inside the *app/app.middleware.js*  include the `express-request-id` middleware before requests are processed.


**Task 2: Include request metadata in each log entry created by express-winston**

Now as we have a unique id in each request, next step to include it in the log entry.  The `express-winston` package automatically logs each HTTP request and response data. As part of this task, configure the logger to include the meta object in each log entry.

The middleware for `express-winston` is configured inside the `addRequestLogger` function in the *app/app.logger.js*. Using the `dynamicMeta` config option, update the configuration to include request metadata in each request. Refer to the  (express-winston)[https://www.npmjs.com/package/express-winston#options] documentation for more details about the configuration properties. You can use the helper method `getRequestMeta` available in the same file that returns request metadata with request id.

**Task 3: Prevent including the password in each log entry created by express-winston**

The Coinspread app has configured the `requestWhitelist` property of the `express-winston` to log all properties in the request body. This includes any sensitive data fields in the request body such as password submitted by users.

As part of this task, prevent logging the password in logs using the `bodyBlacklist` [configuration option](https://www.npmjs.com/package/express-winston#options).

**Task 4: Prevent Log Injection**

The [Log Injection](https://www.owasp.org/index.php/Log_Injection) is possible by an attacker including non-printable, line feed characters in the input data to forge log entries or inject malicious content into the logs.

The *app/app.logger.js* already contains the `requestFilter` method to sanitize the request body for non-printable characters. As part of this task, use this method to configure the logger to filter requests using the `requestFilter` [configuration option](https://www.npmjs.com/package/express-winston#options).

**Task 5: Log  application sign-in failure event**

In the *server/api/access/access.control.js* use the logger to add info level comment when a login attempt fails. Include the request metadata object (fetched using getRequestMeta(req)) in the log entry.

**Task 6: Log  application sign-in success event**
In the *server/api/access/access.control.js* use the logger to add info level comment when a login attempt is successful. Include the request metadata object (fetched using getRequestMeta(req)) in the log entry.

**Task 7: Verify that no password included in the log file**
Verify that signin and signup request logs do not include a password in the *server/logs/application.log* file.