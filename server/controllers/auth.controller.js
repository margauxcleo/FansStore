const db = require("../models");
const config = require("../config/auth.config");
const Client = db.client;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// pour définir une valeur au hasard, qui sera différent à chaque fois
const saltRounds = 15;

const { BadRequest, NotFound } = require('../utils/errors');
const { validationResult } = require('express-validator');

exports.signup = (req, res) => {

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

    // Si on ne rencontre pas d'erreur, on passe à la vérification suivante 
    // 4. On utilise bcrypt pour enregistrer le mot de passe en crypté
    //  saltRounds est une variable qui contient le nombre de caractère aléatoires mélangés avec le mdp 
    bcrypt.hash(body.password, saltRounds, (err, hash) => {

      // Si il y a un pb lors du hash, on l'indique ici
      if (err) {
        console.log(err);
      }

      // 5. On créé le modèle du client, et on précise ce à quoi chaque champs va correspondre
      // Le mot de passe enregistré est bien le mot de passe crypté 
      const client = {
        clientId: body.clientId,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        birth_date: body.birth_date,
        password: hash, // ajout bcrypt
        phone: body.phone
      };

      // 6. On utilise la méthode create de Sequelize pour créer le nouveau client dans la BDD
      Client.create(client)
        .then(client => {
          // 7. On renvoie le client (verif à ce stade )
          console.log(client);
          // 7. On crée le token du client, pour que dès qu'il soit créé, 
          // son token est généré, ce qui permettra de mettre en place le localStorage sans qu'il ait besoin de se connecter manuellement 
          return res.status(200).json({ jwt: jwt.sign(
            {user: {id: user.clientId}}, 
            config.secret, 
            { expiresIn: '24h'}) });
        })
        // En cas d"erreur lors de la création du client en BDD, on renvoie un msg 
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the new client."
          });
        })
    })

  } catch (err) {
    next(err)
  }
};

exports.signin = (req, res, next) => {

  // 1. On stocke le résultat de validator dans la const errors
  const errors = validationResult(req);

  // 2. On récupère les données de la requête
  console.log(req.body);
  // On fait du destructuring
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  // 3. Ici, on vérifie si les conditions du validator passées dans le auth route ont été remplies
  try {
    // Si on a une erreur, on retourne l'erreur dans un array 
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    // Si pas d'erreur, on passe à la suite.

    // 4. Avec Sequelize, on cherche si l'email envoyé correspond à un utilisateur de notre BDD
    Client.findOne({
      where: {
        email: email
      }
    })
      // 5. Si l'email de l'utilisateur existe, on retourne le résultat de la req dans user 
      .then(user => {
        // Si l'email n'existe pas, on retourne un message d'erreur 
        if (!user) {
          return res.status(403).send({ message: "Email non trouvé en base de données." });
        }
        // si le password n'est pas le bon
        // à remettre en place quand on aura crypté les passwords en bdd 
        // let passwordIsValid = (password === user.dataValues.password);
        // let passwordIsValid = bcrypt.compareSync(
        //   password,
        //   user.dataValues.password // ou user[0].password à tester
        // );

        // 6. Si l'email existe bien, on passe à la vérification du mot de passe 
        // On compare le mot de passe envoyé dans la requête avec le mot de passe crypté présent en BDD
        // bcrypt permet de décrypter le mot de passe 
        bcrypt.compare(password, user.dataValues.password)
          .then(valid => {
            // Si les mots de passe sont différents, on rtourne un message d'erreur 
            if (!valid) {
              return res.status(403).json({ error: 'Mot de passe incorrect !' });
            }

            // 7. Si les mots de passe sont identiques, on créé le token 
            // ici, on appelle config.secret, qui est notre clé de sécurité 
            // on précise également une période d'expiration au token 
            console.log(user.clientId);
            // const jwt = jwt.sign({user: {id: user.clientId}}, config.secret, { expiresIn: '24h'});
            // return res.status(200).json({ jwt });
            return res.status(200).json({ jwt: jwt.sign(
              {user: {id: user.clientId}}, 
              config.secret, 
              { expiresIn: '24h'}) });
          })
          .catch((error) => {
            console.log(error.message);
            res.status(500).send({ message: "problème lors de la création du token" });
          });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send({ message: "problème avec le contenu de la requête" });
      });
  } catch (err) {
    next(err)
  }
};

exports.is_verify = async (req, res) => {
  try {
    res.json(true);

  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
}
