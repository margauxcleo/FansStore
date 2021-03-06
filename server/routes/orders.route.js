module.exports = app => {
    const orders = require("../controllers/orders.controller");
  
    var router = require("express").Router();
  
    // Retrieve all orders
    router.get("/", orders.findAllOrders);

    // Créer une nouvelle commande 
    router.post("/newOrder", orders.newOrder);

    // Chercher une commande en particulier 
    router.get('/order', orders.findOneOrder);

    
    app.use('/orders', router);
};