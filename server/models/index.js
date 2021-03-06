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

// ---------------------------------------
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

// un article est présent dans plusieurs sous-commandes (et donc indirectement commande)
// voir partie commande 


// ---------------------------------------
// CLIENTS 
db.client = require("./clients/clients.model")(sequelize, Sequelize);
db.address = require("./clients/addresses.model.js")(sequelize, Sequelize);
db.card = require("./clients/cards.model.js")(sequelize, Sequelize);
db.orders = require("./order/orders.model.js")(sequelize, Sequelize);
db.order_details = require("./order/orderDetails.model")(sequelize, Sequelize);

//  une carte est liée à un client 
db.card.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});

// une adresse est liée à  un client 
db.address.belongsTo(db.client, {
  foreignKey: "fk_clientId"
});

// un client peut avoir plusieurs adresses et cartes 
db.client.hasMany(db.card, { foreignKey: "fk_clientId", as : "cards"});
db.client.hasMany(db.address, { foreignKey: "fk_clientId", as: "addresses" });

// Un client peut avoir plusieurs commandes
db.client.hasMany(db.orders, { foreignKey: "fk_clientId", as: "orders" });

// ---------------------------------------
// COMMANDE 

// un sous-total appartient à une commande
db.order_details.belongsTo(db.orders, { foreignKey: "fk_orderId" });
// une commande a pls un ou pls sous-totaux
db.orders.hasMany(db.order_details, { foreignKey: "fk_orderId", as: "order_detail" });

// un sous total appartient à un seul article 
db.order_details.belongsTo(db.article, { foreignKey: "fk_articleId" })
// un article a plusieurs sous-totaux
db.article.hasMany(db.order_details, { foreignKey: "fk_articleId", as: "order_detail" });


module.exports = db;



