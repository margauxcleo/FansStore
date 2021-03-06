const db = require("../models"); // models path depend on your structure
const OrderDetails = db.order_details;
const Orders = db.orders;
const Article = db.article;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const OrderDetails = {
        orderDetailsId: req.body.articleId,
        fk_ordersId: req.body.orders,
        fk_articleId: req.body.article,
        quantity: req.body.quantity,
        price: req.body.price,
    };

    // Créer un article (pour le test mais pas nécessaire pour nous)
    OrderDetails.create(OrderDetails)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Article."
            });
        });
};

exports.findOrderDetailsById = (req, res) => {

    const id = req.params.id;

    OrderDetails.findByPk(id, {
        include: [
            {model: Orders }, 
            {model: Article}
        ]}) 
        .then(article => {
            // res.send(article);
            res.status(200).json(article);
            // res.status(200).json(JSON.stringify(article));
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the article."
            });
        });
};