const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    try {
        // const token = req.headers["x-access-token"];
        const token = req.header('jwt');

        if (!jwt)
            throw "Unauthorized request";

        // Si on ne récupère pas le token, on envoie un message 
        if (!token) {
            res.send("You need to be logged, no token.");

            // on récupère le payload avec jwt verify et on compare les token 
            // permet de s'assurer qu'il s'agit bien du même user
        } else {
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    res.json(false);
                } else {
                    req.user = decoded.user;
                    next();
                }
            })
        }
    } catch (e) {
        res.status(401).json("You have to be logged in to access this page");
    }
}

module.exports = verifyJWT;