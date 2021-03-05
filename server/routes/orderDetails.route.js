module.exports = app => {
    const OrderDetails = require("../controllers/orderDetails.controller");
  
    var router = require("express").Router();

    //  USER STORY 2 Retrieve one article with his id
    router.get("/:id", OrderDetails.findOrderDetailsById);
    
    app.use('/orders_details', router);
};