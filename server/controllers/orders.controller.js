const db = require("../models"); // models path depend on your structure
const Orders = db.orders;
const Clients = db.clients;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


//Créer une commande
const orders = {
    orderId: req.body.orderId,
    fk_clientId: req.body.clients,
    shipping: req.body.shipping,
    date: req.body.date,
    total_price: req.body.total_price,
};

    // Créer une commande (pour le test mais pas nécessaire pour nous)
    Orders.create(orders)
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



exports.findAllOrders = (req, res) => {

    Orders.findAll({ 
        include: [
            {model: Clients},
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

