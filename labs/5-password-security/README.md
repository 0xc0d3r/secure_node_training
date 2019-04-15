# Lab 5 - Password Security

## Scenario

The coinspread application stores user password in a clear text format in the database. In an event of a data breach, an attacker could misuse the clear text passwords to access user's account and transfer bitcoins.

Your mission of this lab is to tighten the password storage mechanism.

## Setup
1. Drop all existing collections from the database, as after this lab the users would be stored with a password hash. Here is a command to run on mongo console:
    ```
    use coinspread;
    db.dropDatabase();
    ```
2. The lab already includes a `bcryptjs` dependency included in the package.json, so you can skip this step. In a real application, you may prefer to choose the [bcrypt](https://www.npmjs.com/package/bcrypt) package instead. 
**NOTE:** On server startup, if `require('bcrypt')` throws an error (*dyld: lazy symbol binding failed: Symbol not found*), recompile addon by running command: `npm rebuild bcrypt --build-from-source` 
[(Github Issue)](https://github.com/kelektiv/node.bcrypt.js/issues/16)


## Tasks

**Task 1: On a new user sign-up request, store user passwords as a hash using the bcrypt function**

Inside `api\access\access.controller.js` file, the `signup()` method creates a new user record in the database at this line:
`const user = await User.create(data);`. Just before this line, add a logic to:
* Populate data.passwordHash property with the password hash. Use the async version of the [bcrypt.hash](https://www.npmjs.com/package/bcrypt#with-promises) function.
* Use saltRounds value as 10.
* From the data object, delete the existing `password` property that was used for holding a plain text password.


**Task 2: On user sign-in request, validate the user-supplied password against password hash in the database**
Inside `api\access\access.controller.js` file, the `signin()` function checks for the valid password.
Update this function to use asynchronous [bcrypt.compare](https://www.npmjs.com/package/bcrypt#with-promises) method to do a constant time comparsion of the user-supplied password against password hash in the database.

**BONUS Task:** Make the `saltRounds` value used in Task 1 configurable using app/app.config.js.

## Quiz

How the `bcrypt.compare` method knows about the random salt and rounds used to generate the hash being compared? (Hint: Check out [getRounds](https://www.npmjs.com/package/bcrypt#api))