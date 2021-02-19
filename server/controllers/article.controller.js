const db = require("../models"); // models path depend on your structure
const Article = db.article;
const Category = db.product_category;
const Universe = db.universe;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const article = {
        articleId: req.body.articleId,
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        fk_category: req.body.category,
        fk_universe: req.body.universe,
    };

    // Créer un article (pour le test mais pas nécessaire pour nous)
    Article.create(article)
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

exports.findAll = (req, res) => {

    Article.findAll({ 
        include: [
            {model: Universe}, 
            {model: Category}
        ]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving articles."
            });
        });
};