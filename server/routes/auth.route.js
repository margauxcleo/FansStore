module.exports = app => {

    const { verifySignUp } = require("../middleware");
    const controller = require("../controllers/auth.controller");
    let router = require("express").Router();

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
        verifySignUp.checkDuplicateEmail,
      ],
      controller.signup
    );
  
    router.post("/signin", controller.signin);

    app.use('/auth', router);
  };

