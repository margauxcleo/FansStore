module.exports = app => {
    const client = require("../controllers/clients.controller");
  
    let router = require("express").Router();

    const { check } = require('express-validator');

    const verifyJWT = require("../middleware/verifyJwt");

    // Vérification - get tous les clients 
    router.get("/", client.findAllClients);

    // get un client pour rapport à l'id stocké dans le token
    router.get('/client/infos', verifyJWT, client.getClientInfos);

    // Mettre à jour les infos d'un client 
    router.put("/updateClient", [
        check('first_name').not().isEmpty().bail(),
        check('last_name').not().isEmpty().bail(),
        check('email').isEmail().bail(),
        check('birth_date').not().isEmpty().bail(),
        check('phone').not().isEmpty().bail(),
        verifyJWT
    ], 
    client.updateClientInfos);

    // Créer une adresse pour un client => id récupéré dans le token 
    // et non en params
    router.post('/client/addAddress', [
        check('address_name').not().isEmpty().bail(),
        check('street').not().isEmpty().bail(),
        check('zipcode').isEmpty().bail(),
        check('city').not().isEmpty().bail(),
        verifyJWT
    ], client.addAddressToClient);

    // Créer une carte de paiement pour un client => id récupéré dans le token 
    // et non en params
    router.post('/client/addCard', [
        check('card_name').not().isEmpty().bail(),
        check('card_number').not().isEmpty().bail(),
        check('card_exp_date').isEmpty().bail(),
        check('card_cvv').not().isEmpty().bail(),
        verifyJWT
    ], client.addCardToClient);




    // NON UTILISES 

    // get un client par rapport à un id passé en paramètre 
    router.get("/:id", client.findClientById);

    // créer un client - non utilisé => voir auth controller
    router.post("/signup", [
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

    // test: update client via id en param pr test format update
    router.put("update/client/:id", client.updateClient);

    //  fin non utilisés
    
    app.use('/clients', router);



    // peut éventuellement servir + tard
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
};