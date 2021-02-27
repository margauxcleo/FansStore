const db = require("../models"); // models path depend on your structure
const Client = db.article;
const Address = db.address;
const Card = db.card;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const client = {
        clientId: req.body.articleId,
        first_name: req.body.name,
        last_name: req.body.brand,
        email: req.body.price,
        birth_date: req.body.image,
        password: req.body.description,
        phone: req.body.available_quantity,
        // chercher comment indiquer qu'un client a pls addresses et card => on doit faire une fk ?
        // fk_category: req.body.category,
        // fk_universe: req.body.universe,
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