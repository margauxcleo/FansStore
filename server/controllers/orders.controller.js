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
        fk_clientId: req.body.fk_clientId,
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
            { model: Clients },
        ]
    })
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

// TESTS MV ----------------------------------------------
// création d'une commande suite à la validation
exports.newOrder = (req, res) => {

    // 1. On stocke le résultat de validator dans la const errors
    const errors = validationResult(req);
    // 2. On récupère les données de la requête

    const body = req.body;
    body.status = false;

    // 3. Ici, on vérifie si les conditions du validator passées dans le auth route ont été remplies
    try {
        // Si on a une erreur, on retourne l'erreur dans un array 
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        // Soit on calcule le total price depuis le navigateur, et on envoie donc en req cette donnée
        // on peut ensuite mettre en place une vérif: on comparerait ce prix avec un findall where id de la commande concernée + sum(price)
        // en cas de match => on valide la créa de la commande 
        // en cas de diff => on envoie un msg d'erreur

        // Soit on calcule total price ici 
        // Créer une fonction qui va calculer la somme des price récupérés et l'attribuer à total_price
        // Si on ne rencontre pas d'erreur, on passe à la suite
        const totalPrice = "";
        // far une boucle for each ? 


        // Créa modèle order
        const order = {
            orderId: req.body.orderId, // primary key en auto implement
            fk_clientId: req.body.fk_clientId, // récupéré depuis le jwt 
            shipping: req.body.shipping, // récupéré du formulaire (même si valeur auto)
            date: date.now(), // création de la date à l'instant du clic 
            total_price: req.body.total_price, // fonction calcul de tous les sous-totaux
            order_details: [
                {
                    orderId: req.body.orderId,
                    fk_orderId: req.body.orderId, // généré en auto
                    fk_articleId: req.body.fk_articleId,
                    quantity: req.body.quantity, // récupéré du localStorage et envoyé avec le form ?
                    price: req.body.price // récupéré du localStorage et envoyé avec le form ?
                }
            ]
        };

        Order.create(order)
            .then(order => {
                res.send(order);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the new order."
                });
            });
        
        // ou sinon, on fait un findAll sur les ordersDetails et on fait le sum de leur price 
        // const totalPrice2 = Order.findAll()

    } catch (err) {
        next(err)
    }
};

// Récupération des infos liées à une commande pour l'affichage de la confirmation de la commande 
exports.findOneOrder = (req, res) => {

}

