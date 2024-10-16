const Token = require("../models/token");
const jwt = require("jsonwebtoken");
require('dotenv').config();

//method to check token availability and validity for authentication
const authentication = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        const findToken = await Token.findOne({ token, userId: verify.userId});
        
        if (!findToken) {
            throw new Error("Invalid token");
        }

        if (findToken.expiredAt < Date.now()) {
            throw new Error("Token expired");
        }
        req.user = verify;
        next();
    } catch (error) {
        res.status(401).send(error.message);
    }
};

module.exports = authentication;