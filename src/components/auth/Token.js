const crypto = require("crypto")

VerifyToken = (len) => {
    
    return crypto.randomytes(Math.ceil(len/2))
    .toString("hex")
    .slice(0,len);
    
};

console.log(VerifyToken(12))