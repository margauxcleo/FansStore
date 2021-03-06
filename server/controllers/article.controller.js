const db = require("../models"); // models path depend on your structure
const Article = db.article;
const Category = db.product_category;
const Universe = db.universe;
const OrderDetail = db.order_details;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
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
        available_quantity: req.body.available_quantity,
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

exports.findAllArticles = (req, res) => {

    Article.findAll({ 
        include: [
            {model: Universe}, 
            {model: Category},
            { model: OrderDetail, as: "order_detail" }
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

exports.findArticleById = (req, res) => {

    const id = req.params.id;

    Article.findByPk(id, {
        include: [
            {model: Universe}, 
            {model: Category},
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

exports.findAllArticlesHarryPotter = (req, res) => {

    Article.findAll({ 
        where: { 
            fk_universe: 1
        },
        include: [
            {model: Universe}, 
            {model: Category},
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

exports.findAllArticlesStarWars = (req, res) => {

    Article.findAll({ 
        where: { 
            fk_universe: 2
        },
        include: [
            {model: Universe}, 
            {model: Category},
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

exports.findAllArticlesMarvel = (req, res) => {

    Article.findAll({ 
        where: { 
            fk_universe: 3
        },
        include: [
            {model: Universe}, 
            {model: Category},
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

exports.findAllArticlesSda = (req, res) => {

    Article.findAll({ 
        where: { 
            fk_universe: 4
        },
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


    
