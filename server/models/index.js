const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ARTICLES 
db.article = require("./article/article.model")(sequelize, Sequelize);
db.universe = require("./article/universe.model.js")(sequelize, Sequelize);
db.product_category = require("./article/product-category.model.js")(sequelize, Sequelize);

// db.universe.hasMany(db.article);
// db.product_category.hasMany(db.article);
db.article.belongsTo(db.universe, {
  foreignKey: "fk_universe",
  // as: "fk_universe"
});
db.article.belongsTo(db.product_category, {
  foreignKey: "fk_category",
  // as: "fk_category"
});

// CLIENTS 
db.client = require("./clients/clients.model")(sequelize, Sequelize);
db.address = require("./clients/addresses.model.js")(sequelize, Sequelize);
db.card = require("./clients/cards.model.js")(sequelize, Sequelize);

//  un carte a un client 
db.card.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});
// une adresse a un client 
db.address.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});

// Une commande a un client 
db.orders.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});

// Une sous-commande a une commande
db.order_details.belongsTo(db.orders, {
  foreignKey: "fk_orderId"
});


// Un article appartient a une sous-commande
db.article.belongsTo(db.order_details, {
  foreignKey: "fk_orderDetailsId"
});

// un client peut avoir plusieurs adresses et cartes 
// Un client peut avoir plusieurs commandes
db.client.hasMany(db.card, { foreignKey: "fk_clientId", as : "cards"});
db.client.hasMany(db.address, { foreignKey: "fk_clientId", as: "addresses" });
db.client.hasMany(db.orders, { foreignKey: "fk_clientId", as: "orders" });


// Une commande peut avoir plusieurs sous-commandes
db.orders.hasMany(db.order_details, { foreignKey: "fk_orderId", as: "order_details" });

// Une sous-commande peut avoir plusieurs articles
db.order_details.hasMany(db.article, { foreignKey: "fk_articleId", as: "articles" });

module.exports = db;



