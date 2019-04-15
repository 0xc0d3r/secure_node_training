const crypto = require('crypto');

// Task 1:  Get the secret encrption key from env variable
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; //Must be same length as algo: aes-256 =  256 bits (32 characters) key
const IV_LENGTH = 16; // For AES, this is always 16 bytes

exports.encrypt = (plainText) => {
    // Task 2: Generate a random Initialization Vector (IV) for each encryption
    const iv = crypto.randomBytes(IV_LENGTH);
    // Task 3: Use secure createCipheriv()
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    cipher.end(plainText);
    const encrypted = cipher.read();
    // Task 4: Add IV to the encrypted value to be stored together 
    return iv.toString('hex') + '.' + encrypted.toString('hex');
};

exports.decrypt = (encrypted) => {
    // Task 5: Extract IV and encrypted text from the input 
    const textParts = encrypted.split('.');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.shift(), 'hex');
    // Task 5: Decrypt using createDecipheriv
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    decipher.end(encryptedText);
    const decrypted = decipher.read();
    return decrypted.toString();
};
