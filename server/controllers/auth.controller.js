const db = require("../models");
const config = require("../config/auth.config");
const Client = db.client;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const { BadRequest, NotFound } = require('../utils/errors');
const { validationResult } = require('express-validator')

exports.signup = (req, res) => {

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

exports.signin = (req, res) => {
  Client.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
          console.log(user);
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      let token = jwt.sign({ id: user.clientId }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      if(token) {
          res.status(200).send({
            clientId: user.clientId,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            birth_date: user.birth_date,
            password: user.password,
            phone: user.phone,
            accessToken: token
      })};

    //   let authorities = [];
    //   client.getRoles().then(roles => {
    //     for (let i = 0; i < roles.length; i++) {
    //       authorities.push("ROLE_" + roles[i].name.toUpperCase());
    //     }
    //     res.status(200).send({
    //       id: user.id,
    //       username: user.username,
    //       email: user.email,
    //       roles: authorities,
    //       accessToken: token
    //     });
    //   });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};