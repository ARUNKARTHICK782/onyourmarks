const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function (req,res,next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied! Token Required');

    try{
        const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(400).send("Invalid Token!!!")
    }
}