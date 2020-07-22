const CryptoJS = require('crypto-js');

class hash {

    md5(string) {
        return CryptoJS.MD5(string).toString(); 
    }

    sha1(string) {
        return CryptoJS.SHA1(string).toString();
    }

    sha256(string) {
        return CryptoJS.SHA256(string).toString();
    }

    sha512(string) {
        return CryptoJS.SHA512(string).toString();
    }

}

const Hash = new hash();
Hash.md5('secret');
Hash.sha1('secret');
Hash.sha256('secret');
Hash.sha512('secret');