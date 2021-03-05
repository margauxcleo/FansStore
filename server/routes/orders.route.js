module.exports = app => {
    const orders = require("../controllers/orders.controller");
  
    var router = require("express").Router();
  
    // Retrieve all orders
    router.get("/", orders.findAllOrders);

    
    app.use('/orders', router);
};