const crypto = require('crypto');

// Pass encryption password in environment variables.
const ENCRYPTION_PASSWORD = process.env.ENCRYPTION_PASSWORD;

// TODO: LAB TASK 1: Instead of passing ENCRYPTION_PASSWORD, pass an ENCRYPTION_KEY in env variable.
// For aes-256, as the name suggests, the key must be 258 bits (32 characters)
// e.g. 45745c60-7b1a-11e8-9c9c-2d42b21f

const encrypt = (plainText) => {
    // TODO LAB TASK 2: Generate a random Initialization Vector (IV) for each encryption to be used in crypto.createCipheriv 
    // The IV value is always 16 bytes for AES. For example: iv = crypto.randomBytes(LENGTH_IN_BYTES)

    // TODO: LAB TASK 3: Use secure crypto.createCipheriv method instead of crypto.createCipher,
    // passing the algo name 'aes-256-cbc', Buffer.from(ENCRYPTION_KEY), and iv
    // https://nodejs.org/api/crypto.html#crypto_crypto_createcipheriv_algorithm_key_iv_options
    const cipher = crypto.createCipher('aes-256-cbc', new Buffer.from(ENCRYPTION_PASSWORD));
    cipher.end(plainText);
    const encrypted = cipher.read();

    // TODO: LAB TASK 4: Store the randomly geneated IV value along with encrypted value by prepending it to encrypted value followed by a separator character 
    //(e.g. iv|encrypted) so that it could be derived during decryption
    return encrypted.toString('hex');
};

const decrypt = (encrypted) => {
    // TODO LAB TASK 5: Extract IV and encypted text from the argument 

    // TODO LAB TASK 6: Use crypto.createDecipheriv by passing algo name 'aes-256-cbc', key as  a buffer Buffer.from(ENCRYPTION_KEY), and iv;
    const decipher = crypto.createDecipher('aes-256-cbc', new Buffer.from(ENCRYPTION_PASSWORD));

    encrypted = Buffer.from(encrypted, 'hex');
    decipher.end(encrypted);
    const decrypted = decipher.read();
    return decrypted.toString();
};

module.exports = { decrypt, encrypt };