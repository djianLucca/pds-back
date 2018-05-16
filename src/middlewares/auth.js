'use strict';
const jwt = require('jsonwebtoken');

const SECRET_WORD = "djianSmm";

exports.generateToken = async (data) => {
    return jwt.sign(data, SECRET_WORD, { expiresIn: '1d' });
}

exports.auth = (req, res, next) => {
    const token = req.headers['x-access-token'];

    const errorUnauthorized = new Error();
    errorUnauthorized.message = 'Unauthorized request.';
    errorUnauthorized.status = 401;

    if (!token) {
        next(errorUnauthorized);
    } else {
        jwt.verify(token, SECRET_WORD, (error, decoded) => {
            if (error) {
                next(errorUnauthorized);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
}

exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, SECRET_WORD);
    return data;
}
