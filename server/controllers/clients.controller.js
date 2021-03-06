const db = require("../models");
const Client = db.client;
const Address = db.address;
const Card = db.card;
const Order = db.orders;

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
            password: body.password,
            phone: body.phone
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
                        err.message || "Some error occurred while creating the new card."
                });
            });

    } catch (err) {
        next(err)
    }
};

// Récupérer tous les clients
exports.findAllClients = (req, res, next) => {
    try {
        Client.findAll({
            include: [
                { model: Card, as: "cards" },
                { model: Address, as: "addresses" },
                { model: Order, as: "orders" }
            ]   
        })
        .then(clients => {
            res.send(clients);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all clients."
            });
        })

    } catch (err) {
        next(err);
    }
};

// Récupérer un client selon son id 
exports.findClientById = (req, res, next) => {

    const id = req.params.id;

    try {
        if (!id) {
            throw new BadRequest('Missing required fields: id');
        }

        Client.findByPk(id, {
            include: [
                { model: Card, as: "cards" },
                { model: Address, as: "addresses" }
            ]
        })
        .then(client => {
            res.send(client);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the client."
            });
        })

    } catch (err) {
        next(err);
    }
};

// Récupérer les infos d'un client par rapport à l'id récupéré dans le token

exports.getClientInfos = (req, res, next) => {

    const id = req.user.id;

    try {
        if (!id) {
            throw new BadRequest('Missing required fields: id');
        }

        Client.findByPk(id, {
            include: [
                { model: Card, as: "cards" },
                { model: Address, as: "addresses" }
            ]
        })
        .then(user => {
            console.log(user);
            return res.json(user);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the client."
            });
        })

    } catch (err) {
        next(err);
    }
}