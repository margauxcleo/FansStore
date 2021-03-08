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
    // plusieurs choses à mettre en place 
    // On récupère le panier stocké en localStorage qui équivaut aux sous-totaux 
    // On doit créer une commande 
    // Se servir de son id et faire un map sur chaque item du panier, pour créer les order details
    // On doit également adapter la valeur restant en stocke, par rapport à l'id de l'article

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

        // 1) On doit créer une commande 
        // on définit son modèle
        const order = {
            orderId: body.orderId, // primary key en auto implement
            fk_clientId: id, // récupéré depuis le jwt 
            shipping: body.shipping, // récupéré du formulaire (même si valeur auto)
            date: date.now(), // création de la date à l'instant du clic 
            total_price: "", // fonction calcul de tous les sous-totaux
        };

        // on la créée
        Order.create(order)
        .then(order => {
            console.log(order);
            // On crée sa collection, en récupérant l'id stocké dans order suite à sa création
            const orderCollection = Order.findOne({orderId: order.orderId});

            // On crée le modèle d'une sous commande 
            const orderDetail = {
                orderDetailsId: body.orderId, // auto incrément donc crée en auto 
                fk_orderId: order.orderId, // ici c'est celui de la commande en cours 
                fk_articleId: body.fk_articleId, // se trouvera dans le panier 
                quantity: body.quantity, //  se trouvera dans le panier 
                price: body.price //  se trouvera dans le panier 
            };


            // On doit faire un for sur cart pour créer un model par article 


            // Si on récupère bien la commande 
            if (orderCollection) {
                const newOrderDetail = OrderDetail.create(orderDetail);
                res.status(201).send(newAddress)
            }
            else {
                re.status(404).send("Order Not Found")
            }

            // On doit faire un for sur cart pour créer un model par article 

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the new order."
            });
        });
            // On crée sa "collection"
        
        // ou sinon, on fait un findAll sur les ordersDetails et on fait le sum de leur price 
        // const totalPrice2 = Order.findAll()

    } catch (err) {
        next(err)
    }
};

// Récupération des infos liées à une commande pour l'affichage de la confirmation de la commande 
exports.findOneOrder = (req, res) => {

}

