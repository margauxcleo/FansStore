module.exports = app => {
    const client = require("../controllers/clients.controller");
  
    var router = require("express").Router();

    const { check } = require('express-validator');
  
    // Vérification - get tous les clients 
    router.get("/", client.findAllClients);

    // get un client par rapport à son id
    router.get("/:id", client.findClientById);
    
    // créer un client
    router.post("/addClient", [
        check('first_name').not().isEmpty().bail(),
        check('last_name').not().isEmpty().bail(),
        check('email').isEmail().bail(),
        check('birth_date').not().isEmpty().bail(),
        check('password').not().isEmpty().bail(),
        check('phone').not().isEmpty().bail()
    ], 
    client.createClient);

    // créer une adresse - non testé à date
    router.post("/addAddress", [
        check('address_name').not().isEmpty().bail(),
        check('street').not().isEmpty().bail(),
        check('zipcode').isEmail().bail(),
        check('city').not().isEmpty().bail(),
        check('fk_clientId').not().isEmpty().bail()
    ],
    client.createAddress);

    // créer une carte - non testé à date
    router.post("/addCard", [
        check('card_name').not().isEmpty().bail(),
        check('card_number').not().isEmpty().bail(),
        check('card_exp_date').isEmail().bail(),
        check('card_cvv').not().isEmpty().bail(),
        check('fk_clientId').not().isEmpty().bail()
    ],
    client.createCard);

    // connexion ou update client
    // This protected route must be accessed either by passing both username + password,
    // or by passing an access token
    // app.post(
    //     '/protected/route',
    //     oneOf([
    //     [check('username').exists(), check('password').exists()],
    //     check('access_token').exists()
    //     ]),
    //     someRouteHandler,
    // );
    
    app.use('/clients', router);
};