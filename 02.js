const CryptoJS = require('crypto-js');

class cipher {

    encrypt(string, password) {
       return CryptoJS.AES.encrypt(string, password).toString()
    }

    decrypt(string, password) {
        var bytes = CryptoJS.AES.decrypt(string, password)
        return bytes.toString(CryptoJS.enc.Utf8)
    }

}

const Cipher = new cipher()
const message = Cipher.encrypt('ini tulisan rahasia', 'p4$$w0rd')
console.log(message)
const decryptedMessage = Cipher.decrypt(message, 'p4$$w0rd')
console.log(decryptedMessage)