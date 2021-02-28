const db = require("../models"); // models path depend on your structure
const Client = db.article;
const Address = db.address;
const Card = db.card;

const { BadRequest, NotFound } = require('../utils/errors');
const { validationResult } = require('express-validator')

// Créer un client 
exports.createClient = (req, res, next) => {

    const errors = validationResult(req);
    var body = req.body;
    body.status = false;

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        // Créer un client 
        const client = {
            clientId: body.clientId,
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            birth_date: body.birth_date,
            password: body.descrpasswordiption,
            phone: body.phone,
        };
        // Créer un nouveau client
        Client.create(client)
            .then(client => {
                res.send(client);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the new client."
                });
            });
        

        

        // Créer une adresse 
        const address = {
            addressId: req.body.addressId,
            address_name: req.body.address_name,
            street: req.body.street,
            zipcode: req.body.zipcode,
            city: req.body.city,
            fk_clientId: fk_clientId
        };

        // Créer un carte 
        const card = {
            cardId: req.body.cardId,
            card_name: req.body.card_name,
            card_number: req.body.card_number,
            card_exp_date: req.body.card_exp_date,
            card_cvv: req.body.card_cvv,
            fk_clientId: fk_clientId
        };

        

        // Créer une nouvelle adresse
        exports.createAddress = (fk_clientId, address) => {
            Address.create(fk_clientId, address)
                .then(address => {
                    res.send(address);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the new address."
                    });
                });
        }
        // Créer une nouvelle carte 
        exports.createCard = (fk_clientId, card) => {
            Card.create(fk_clientId, card)
                .then(card => {
                    res.send(card);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the new client."
                    });
                });
        }
    } catch (err) {
        next(err)
    }
};

// Créer une adresse 
exports.createAddress = (req, res, next) => {

    const errors = validationResult(req);
    var body = req.body;
    body.status = false;

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

         // Créer une adresse 
         const address = {
            addressId: body.addressId,
            address_name: body.address_name,
            street: body.street,
            zipcode: body.zipcode,
            city: body.city,
            fk_clientId: body.fk_clientId
        };

        // Créer une nouvelle adresse
        Address.create(address)
            .then(address => {
                res.send(address);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the new address."
                });
            });

    } catch (err) {
        next(err)
    }
};

// Créer une carte 
exports.createCard = (req, res, next) => {

    const errors = validationResult(req);
    var body = req.body;
    body.status = false;

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }  

        // Créer un carte 
        const card = {
            cardId: body.cardId,
            card_name: body.card_name,
            card_number: body.card_number,
            card_exp_date: body.card_exp_date,
            card_cvv: body.card_cvv,
            fk_clientId: body.fk_clientId
        };


        // Créer une nouvelle carte 
        Card.create(card)
            .then(card => {
                res.send(card);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the new client."
                });
            });

    } catch (err) {
        next(err)
    }
};

// afficher 