# Lab 6 - Securely Storing Data

## Scenario

The Tax ID submitted by users on the signup form is a sensitive piece of data. 
In an event of a data breach, to prevent leaking a plain text value of Tax Id to an attacker's hands, the coinspread application encrypts the value before storing it in the database.

Although the application uses the strong AES encryption algorithm as recommended by NIST, there is a security issue. The application uses the Node `crypto.createCipher` method to encrypt the data. This method derives the encryption key using the secret encryption password supplied by the system admin on server startup via an environment variable. The `crypto.createCipher` has the following weaknesses:
1. The `crypto.createCipher` method produces the same encrypted result given the same original text input. A strong encryption should always produce a different output, even given the same exact input. If enough plain text and encrypted values are known, an attacker can derive the encryption key.
2. The implementation of `crypto.createCipher` create encryption key form the password using the weak (i.e. fast) MD5 digest algorithm, one iteration, and no salt. The lack of salt allows dictionary attacks as the same password always creates the same key. The low iteration count and non-cryptographically secure hash algorithm allow passwords to be tested very rapidly. Thus using a known encryption key, an attacker can derive the encryption password set in the environment variable.

Your mission of this lab is to tighten the encryption and decryption utility methods in the `api/util/crypto.util.js` file, using the  [crypto.createCipheriv()](https://nodejs.org/api/crypto.html#crypto_crypto_createcipheriv_algorithm_key_iv_options) method. Unlike [crypto.createCipher()](https://nodejs.org/api/crypto.html#crypto_crypto_createcipher_algorithm_password_options), this method uses a random 128-bit string, called as *Initialization Vector (IV)* for each encryption execution, making the output value different even for the same input value. Thus foiling the attacker's efforts to derive the secret key from observing patterns in the plaintext and corresponding encrypted values. This adds an extra work though to store the IV value along with the password in the database, so that it could be then used for decrypting the password with [crypto.createDecipheriv()](https://nodejs.org/api/crypto.html#crypto_crypto_createdecipheriv_algorithm_key_iv_options). Fear not, the tasks below will walk you through the required steps to implement it.

## Setup
1. The crypto.util.js needs encryption password supplied as part of the environment property to do the encryption. To pass the env variable, start the server on a terminal, you can pass the environment variable 'ENCRYPTION_PASSWORD' as
`ENCRYPTION_PASSWORD=super_secret_password_here ENCRYPTION_KEY=45745c60-7b1a-11e8-9c9c-2d42b21f npm start`


If using the VS Studio Code debugger, you can set env variable in the `env` property in the launch.json:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/coinspread/server/bin/www",
            "env": {
                "ENCRYPTION_PASSWORD": "super_secret_password_here",
                "ENCRYPTION_KEY": "45745c60-7b1a-11e8-9c9c-2d42b21f"
                       }
        }
    ]
}
```

## Tasks:

**Task 1:** Instead of passing ENCRYPTION_PASSWORD, pass an ENCRYPTION_KEY in an env variable.

One of the weaknesses of `crypto.createCipher` method was it derives encryption key by hashing the password in an unsafe way. When using aes-256, the `crypto.createCipheriv` method takes the 256 bit random key (e.g. `45745c60-7b1a-11e8-9c9c-2d42b21f`) as one of the input parameters instead. As part of this task, inside `api/util/crypto.util.js` change the code to take the ENCRYPTION_KEY from an env variable, instead of ENCRYPTION_PASSWORD.

**Task 2:** Besides the key, to add the randomness to the encrypted output, the `createCipheriv` also takes a 128 bit (16  characters) random Initialization Vector (IV). Inside the `encrypt()` method in `crypto.util.js`, generate the random 16-byte value as IV.  You can use `crypto.randomBytes(LENGTH_IN_BYTES)` to generate a random value of the desired length.

**Task 3:**: Now, as you have all the ingredients ready, replace the `crypto.createCipher` method with `crypto.createCipheriv` instead of crypto.createCipher, passing the algorithm name `aes-256-cbc`, `Buffer.from(ENCRYPTION_KEY)`, and `iv` as parameters. Refer to the [Node crypto documentation](https://nodejs.org/api/crypto.html#crypto_crypto_createcipheriv_algorithm_key_iv_options) if needed.

**Task 4:**: One last thing before you return the encrypted value generated from the `crypto.createCipheriv`; inside the `encrypt()` function - we need to save the IV somewhere as it is randomly generated just for this encryption and needed again to decrypt the encrypted value. The good news is IVs are typically just added to the encrypted values in an unencrypted format. Initialization Vectors should be unpredictable and unique, but they do not have to be secret. It may sound contradictory that something has to be unpredictable and unique, but does not have to be secret. Why? Remember that the only role of IV is to add a variation in output so that an attacker would not be able to predict it ahead of time.

You can pick any separator character(s) that are not valid HEX characters and prefix the IV to encrypted value being returned.
To make the values easy to store in the database, HEX encode IV and encrypted password values before returning. For example - `return iv.toString('hex') + '.' + encrypted.toString('hex');`

The existing code already stores the returned values in the database. Hurray! the tax_ids are stored more securely now than ever.
  
**Task 5:**: Update the `decrypt` function inside the `crypto.util.js` to use [crypto.createDecipheriv()](https://nodejs.org/api/crypto.html#crypto_crypto_createdecipheriv_algorithm_key_iv_options). To do so, extract IV and encypted text from the function argument with name `encrypted`. You may find string `split()` and array `shift()` methods handy to do so. As the encrypted and IV values were returned in HEX encoded format in task 4, use `Buffer.from(VALUE, 'hex')` to convert encrypted password and IV back to Buffer instances. `crypto.createDecipheriv()` method accepts these input values as Buffer instances.
