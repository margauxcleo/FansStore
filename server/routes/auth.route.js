module.exports = app => {

    const verifyJWT = require("../middleware/verifyJwt");
    const { verifySignUp } = require("../middleware");
    const controller = require("../controllers/auth.controller");
    const router = require("express").Router();

    const { check } = require('express-validator');

    router.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    router.post(
      "/signup",
      [
        check('first_name').not().isEmpty().bail(),
        check('last_name').not().isEmpty().bail(),
        check('email').isEmail().bail(),
        check('birth_date').not().isEmpty().bail(),
        check('password').not().isEmpty().bail(),
        // check('phone').not().isEmpty().bail(),
        verifySignUp.checkDuplicateEmail,
      ],
      controller.signup
    );
  
    router.post("/signin", [
      check('email').isEmail().bail(),
      check('password').not().isEmpty().bail(),
    ], controller.signin);

    // à chaque render / changement de page, on effectuera cette vérification
    // permet de savoir un token existe ou non
    // et donc de pouvoir bloquer l'accès à certaines routes 
    router.get("/is_verify", verifyJWT, controller.is_verify);

    app.use('/auth', router);
  };

