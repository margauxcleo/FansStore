module.exports = app => {
    const orders = require("../controllers/orders.controller");
  
    let router = require("express").Router();

    const { check } = require('express-validator');

    const verifyJWT = require("../middleware/verifyJwt");
  
    // Retrieve all orders
    router.get("/", orders.findAllOrders);

    // Créer une nouvelle commande 
    router.post("/newOrder", [
        check('shipping').not().isEmpty().bail(),
        verifyJWT
    ], orders.newOrder);

    // Chercher une commande en particulier 
    router.get('/order', orders.findOneOrder);

    
    app.use('/orders', router);
};