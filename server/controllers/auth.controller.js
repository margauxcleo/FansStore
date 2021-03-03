const db = require("../models");
const config = require("../config/auth.config");
const Client = db.client;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// pour définir une valeur au hasard, qui sera différent à chaque fois
const saltRounds = 15;

const { BadRequest, NotFound } = require('../utils/errors');
const { validationResult } = require('express-validator')

exports.signup = (req, res) => {

  const errors = validationResult(req);
  var body = req.body;
  body.status = false;

  // vérifier si les validations de Cors passent, sinon err
  try {
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    // crypter le mot de passe 
      bcrypt.hash(body.password, saltRounds, (err, hash) => {

        if (err) {
          console.log(err);
        }
        // Model d'un client 
        const client = {
          clientId: body.clientId,
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          birth_date: body.birth_date,
          password: hash, // ajout bcrypt
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
      });


  } catch (err) {
    next(err)
  }
};

exports.signin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Client.findOne({
    where: {
      email: email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({ message: "Email non trouvé en base de données." });
      } 
      // si le password n'est pas le bon
      // à remettre en place quand on aura crypté les passwords en bdd 
      // let passwordIsValid = (password === user.dataValues.password);
      // let passwordIsValid = bcrypt.compareSync(
      //   password,
      //   user.dataValues.password // ou user[0].password à tester
      // );
      bcrypt.compare(password, user.dataValues.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          clientId: user.clientId,
          token: jwt.sign(
            { clientId: user.clientId },
            config.secret,
            { expiresIn: '24h' }
          )
        });
      })
      .catch(error => res.status(500).json({ error }));

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};