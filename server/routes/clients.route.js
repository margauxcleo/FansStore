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
    // créer une adresse
    router.post("/addAddress", client.createAddress);
    // créer une carte
    router.post("/addCard", client.createCard);

    // créer une adresse client
    // créer un card client 

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