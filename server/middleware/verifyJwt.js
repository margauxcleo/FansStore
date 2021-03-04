const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        // Si on a pas de token, on envoie un message 
        if(!token) {
            res.send("You need to be logged, no token.");

        // on récupère le payload avec jwt verify et on compare les token 
        // permet de s'assurer qu'il s'agit bien du même user
        } else {
            jwt.verify(token, config.secret, (err, decoded) => {
                if(err) {
                    res.json(false);
                } else {
                    req.clientId = decoded.id;
                    next();
                }
            })
        }
    } catch(e) {
        res.status(401).json("You have to be logged in to access this page");
    }
}

module.exports = verifyJWT;