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
        articleId: req.body.articleId,
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        available_quantity: req.body.available_quantity,
        fk_category: req.body.category,
        fk_universe: req.body.universe,
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